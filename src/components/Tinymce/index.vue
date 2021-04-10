<template>
  <div class="tinymce-warp">
    <textarea :id="tinymceId"></textarea>
  </div>
</template>

<script>
import toolbar from './toolbar';
import plugins from './plugins';

export default {
  name: 'tinymce',
  props: {
    id: {
      type: [ Number, String ],
      default: ''
    },
    width: {
      type: [ Number, String ],
      default: 'auto'
    },
    height: {
      type: Number,
      default: 500
    },
    toolbar: {
      type: [ Array, String ],
      default: ''
    },
    menubar: {
      type: [String, Boolean],
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    } // 自定义配置
  },
  data() {
    return {
      tinymceId: this.id || 'vue-tinymce' + Date.parse(new Date()),
      initialized: false,
      changed: false,
      fullscreen: false,
      baseOptions: {
        language: 'zh_CN',
        width: this.width, // 编辑器宽度
        height: this.height, // 编辑器高度
        branding: false, // 是否禁用 “Powered by TinyMCE”
        indentation: '2em',
        menubar: this.menubar, // 顶部菜单栏显示
      }, // tinymce 基础配置
      pasteOptions: {
        powerpaste_word_import: 'propmt',// 参数可以是propmt, merge, clear，效果自行切换对比
        powerpaste_html_import: 'propmt',// propmt, merge, clear
        powerpaste_allow_local_images: true,
        paste_data_images: true
      }, // powerpaste 插件配置
      imageOptions: {
        automatic_uploads: true,
				image_dimensions : true,
				image_title: false,
        image_description: false
      }, // iamge 插件配置
      linkOptions: {
        default_link_target: '_blank'
      } // link 插件配置
    };
	},
  watch: {
    value(val) {
      if (this.initialized && !this.changed) {
        this.$nextTick(() => tinymce.get(this.tinymceId).setContent(val || ''));
      }
    }
  },
  mounted() {
    this.initTinymce();
  },
  methods: {
    initTinymce() {
      window.tinymce.init({
        selector: `#${ this.tinymceId }`,
        ...this.baseOptions,
        ...this.pasteOptions,
        ...this.imageOptions,
        plugins: this.plugins || plugins,
        toolbar: this.toolbar || toolbar,
        init_instance_callback: editor => {
          if (this.value) {
            editor.setContent(this.value);
          }
          this.initialized = true;

          editor.on('Change KeyUp SetContent', () => {
            this.changed = true;
            this.$emit('input', editor.getContent());
          });
        }, // 实例初始化钩子函数
				images_upload_handler: async (blobInfo, success, failure) => {
          const file = blobInfo.blob();
          const formData = new FormData();
          // /**
          //  * 单独上传图片时 file<File>
          //  * 图文粘贴时 file<Blob>
          //  */
          // const[ type, extension ] = file.type && file.type.split('/');
          // let fileName = '';

          // if (type === 'image') {
          //   const date = +new Date();
          //   fileName = `${type}_${date}.${extension}`;
          // }
          
          // formData.append('file', file, file.name || fileName);
        
          // try {
          //   const { datas: docid } = await uploadWefile(formData);
          //   const { datas: url } = await downloadWefile({ docid });
          //   success(url); // 替换 src 地址
          // } catch (error) {
          //   console.error('error', error);
          //   failure('上传失败，请稍后重试');
          // }
        }, // 图片上传钩子函数
        ...this.options // 自定义配置
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen');
      }
      if (tinymce) {
        tinymce.destroy();
      }
    }
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce();
    }
  },
  deactivated() {
    this.destroyTinymce();
  },
  destroyed() {
    this.destroyTinymce();
  }
}
</script>
