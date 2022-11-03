//package security;
//
//
//import config.WebSecurityConfig;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class ApplicationSecurityConfig {
//
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests().anyRequest()
//                .authenticated()
//                .and()
//                .httpBasic();
//    }
//}
