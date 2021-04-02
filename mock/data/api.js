module.exports = [
    {
        url: '/apiBase/page',
        type: 'post',
        enabled: true,
        response: () => ({
            datas: {
                current: 1,
                pages: 107,
                records: [
                    {
                        apiCode: "weisifenApi0305",
                        apiDesc: "weisifenApi0305",
                        apiId: "026rpulhowohude4",
                        apiName: "weisifenApi0305",
                        buId: 1,
                        businessType: "1,3",
                        businessTypeDesc: "零售账户,保证金",
                        createdBy: "WEISIFEN618",
                        createdDate: "2021-03-05 17:10:54",
                        dataProvider: "0",
                        failResultSample: "weisifenApi0305",
                        gatewayType: "/obp/h5/gatewayU5.do",
                        id: 4502,
                        internalShare: 1,
                        isOpen: "1",
                        requestMethod: "api_request_method_post",
                        resultPattern: "api_result_pattern_tranparent_unknown",
                        resultSample: "weisifenApi0305",
                        status: 1,
                        systemId: "1",
                        updatedBy: "WEISIFEN618",
                        updatedDate: "2021-03-17 16:05:02",
                        version: "1615968302326",
                        visibility: 1,
                    }
                ],
                searchCount: true,
                size: 82,
                total: 854,
            },
            responseCode: "000000",
            responseMsg: "成功1234"
        })
    },
    {
        url: '/education/user/login',
        type: 'post',
        // enabled: true,
        response: () => ({
            responseMsg: "成功9"
        })

    }
]