<template>
    <div class="iframe-container">
        <iframe id="iframe-box" :src="src" frameborder="0"></iframe>

    </div>
</template>
<script>
import {getOfficialList} from '@/api';
export default {
    data() {
        return {
            src: '',
            form: {}
        }
    },
    created() {
        this.src = this.$route.query.src;
        window.addEventListener('message',  async e => {
            
            const data = e.data;
            const type = data.type;
            const action = data.action;
            if (type === 'xhr') {
                const iframe = document.querySelector('#iframe-box')
                if (action === 'mchInfo') {
                    const ret = await getOfficialList();
                    iframe.contentWindow.postMessage({
                        action,
                        data: ret,
                    }, '*');              
                }
                if (action === 'appId') {
                    iframe.contentWindow.postMessage({
                        action,
                        data: 'appidxxxxxfshfh',
                    }, '*');
                }
            }
            if (type === 'message') {
                this.form = {
                    ...this.form,
                    ...data.data
                }
                this.$store.dispatch('setIframePostMessageData', this.form)
                console.log('[Type Message]: revice data from iframe', data.data)
            }
            if (type === 'navigateBack') {
                this.$router.go(-1);
                // this.$router.replace({
                //     path: '/home',
                //     // query: this.form
                // })
            }
        })
        
    }
}
</script>

<style lang="less" scoped>
    .iframe-container {
        width: 100%;
        height: 100%;
        iframe {
            width: 100%;
            height: 100%;
        }
    }    
</style>