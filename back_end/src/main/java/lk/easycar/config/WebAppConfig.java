package lk.easycar.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = "lk.easycar")
public class WebAppConfig {
    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver vr = new InternalResourceViewResolver();
        vr.setPrefix("/");
        vr.setSuffix(".jsp");
        return vr;
    }
    @Bean
    public MultipartResolver multipartResolver() {
        return new CommonsMultipartResolver();
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
