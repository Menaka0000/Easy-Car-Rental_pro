package lk.easycar.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(basePackages = "lk.easycar.repo")
@EnableTransactionManagement
@PropertySource("classpath:application.properties")
public class JPAConfig  {
    @Autowired
    Environment env;

    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource ds , JpaVendorAdapter v) {
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        bean.setJpaVendorAdapter(v);
        bean.setDataSource(ds);
        bean.setPackagesToScan("lk.easycar.entity");
        return bean;
    }
    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource= new DriverManagerDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/easycarrental?createDatabaseIfNotExist=true");
        dataSource.setUsername("root");
        dataSource.setPassword("1234");
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        return dataSource;
    }
    @Bean
    public JpaVendorAdapter jpaVendorAdapter(){
        HibernateJpaVendorAdapter vendor = new HibernateJpaVendorAdapter();
        vendor.setDatabasePlatform("org.hibernate.dialect.MySQL8Dialect");
        vendor.setDatabase(Database.MYSQL);
        vendor.setShowSql(true);
        vendor.setGenerateDdl(true);
        return vendor;
    }
    @Bean
    public PlatformTransactionManager transactionManager (EntityManagerFactory emf){
        return  new JpaTransactionManager(emf);
    }
}
