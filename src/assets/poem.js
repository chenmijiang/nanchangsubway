import axios from 'axios';
import cheerio from 'cheerio';

export default {
    host: 'http://www.ncmtr.com',
    // 获取文章内容
    getPoem: function (id) {
        // http://47.103.111.10:80/allnews?s=/news/detail/id/${id}.html
        return axios.get(`http://47.103.111.10:80/allnews?s=/news/detail/id/${id}.html`)
            .then((response) => {
                const $ = cheerio.load(response.data);
                //获取文章 $('.article').html() 
                //修改图片地址：$('.article img')
                $('.article img').each((i, img) => {
                    img.attribs.src = this.host + img.attribs.src;
                });
                // console.log($('.article').html());
                return $('.article').html()
            });
    },
    // 获取文章列表
    getNews: function (category, page) {
        // http://47.103.111.10:80/allnews?s=/news/listapi.html&category=42&p=${page}
        return axios.get(`http://47.103.111.10:80/allnews?s=/news/listapi.html&category=${category}&p=${page}`)
            .then((response) => {
                if (response) {
                    let jsonData = response.data;
                    jsonData.forEach(element => {
                        if (element.path) {
                            element.path = this.host + element.path;
                        }
                    });
                    // resolve(jsonData);
                    // resolveComponent
                    //需求：title标题、description简介、path图片路径、create_time创建时间、id文章编号
                    return jsonData;
                    // console.log(typeof jsonData); object
                } else {
                    return [];
                }
            })
    }
}