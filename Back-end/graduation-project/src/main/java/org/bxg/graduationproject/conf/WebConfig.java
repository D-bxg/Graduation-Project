package org.bxg.graduationproject.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
    


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 设置允许跨域的路径
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOrigins("http://localhost:3000")
                // 是否允许证书
                .allowCredentials(true)
                .allowedMethods("*")
                .maxAge(3600);
}
}
/*
 * @Author: D_bxg
 * @Date: 2022-02-26 17:17:35
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-02-26 17:17:35
 * @Description: file content
 * @FilePath: \graduation-project\src\main\java\org\bxg\graduationproject\conf\WebConfig.java
 */
