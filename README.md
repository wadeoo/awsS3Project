![主界面](./img/page.png)
![s3](./img/s3.png)
# SpringBoot,React.js&AWS

- 学习
    - ✅ Spring Boot 3
    - ✅ HTTP & API 
    - ✅ 健壮的 error handling 技巧
    - ✅ PostgreSQL
    - ✅ Spring Data JPA
        - Spring Data JPA是Spring Framework提供的一种简化数据库访问的框架，它基于JPA（Java Persistence API）规范，并提供了额外的功能和便利性。它的目标是通过提供一组简单易用的API，简化和统一对数据库的访问，减少重复的编码工作。
        - Spring Data JPA的主要特点和优势包括：
        - 简化数据访问：Spring Data JPA提供了一组简单易用的API，封装了数据库的常见操作，如增加、删除、修改、查询等，使开发人员能够更轻松地进行数据库访问。 
        - 自动化实现：Spring Data JPA通过使用JPA提供的特性和注解，自动为开发人员生成常见的数据库操作代码，减少手动编写SQL语句的工作量。
        - 基于约定的查询：Spring Data JPA基于方法命名规则和约定，可以根据方法名自动生成查询语句，减少编写自定义查询的工作量。
        - 分页和排序支持：Spring Data JPA提供了对分页和排序的支持，可以方便地进行结果集的分页和排序操作。
        - Specification查询：Spring Data JPA支持使用Specification来构建动态查询，可以根据不同的查询条件动态生成查询语句。
        - 事务管理：Spring Data JPA与Spring框架的事务管理集成良好，可以利用Spring的事务管理功能来管理数据库事务。
    - ✅ Flyway可以实现无缝的数据库迁移
        - 数据库迁移是在应用程序的生命周期中对数据库模式进行演化和变更的过程。在开发过程中，数据库模式可能会发生变化，包括添加新的表、修改表结构、插入初始数据等。这些变更需要在不影响现有数据的情况下进行，并且应该能够轻松地在不同的环境中进行部署和升级。
        - Flyway是一个开源的数据库迁移工具，它能够帮助开发团队轻松管理数据库模式的变更和迁移。它通过一组可执行的脚本文件（称为迁移脚本）来定义数据库模式的变更。每个迁移脚本包含对数据库的特定变更，如创建表、修改表结构、插入数据等。Flyway会自动检测和执行这些迁移脚本，以保证数据库模式与应用程序的版本保持一致。
        - Flyway的主要特点和优势包括：
            1.	简单易用：Flyway提供了简单的命令行和API，使得数据库迁移的管理变得非常简单。
            2.	无侵入性：Flyway的设计理念是将数据库迁移集成到应用程序中，而不是依赖于外部工具。它使用简单的SQL脚本进行迁移，不需要额外的工具或框架。
            3.	版本控制：Flyway通过对迁移脚本进行版本控制，可以追踪数据库模式的演化历史，并确保每个迁移脚本只被执行一次。
            4.	自动化执行：Flyway会自动检测并执行未执行过的迁移脚本，使得数据库的变更可以无缝地应用到不同的环境中，如开发、测试和生产环境。
            5.	灵活性：Flyway支持多种数据库平台，并且可以根据需要进行定制和扩展。
    - ✅ JDBC：JDBC（Java Database Connectivity）用于有效地与数据库进行通信。它是Java语言访问关系数据库的标准API。
        - 在Spring Data JPA中，底层的数据库通信仍然需要使用JDBC（Java Database Connectivity）。JPA只是对JDBC的一种封装和抽象，它通过使用EntityManager来管理实体对象和数据库之间的交互。而JDBC作为底层的数据库驱动，负责实际的数据库连接、SQL语句的执行和结果的返回。
    - ✅ 测试策略：项目包含了测试策略，这是一种为了编写健壮可靠代码而采用的方法。测试策略可能包括单元测试、集成测试和端到端测试等。
    - ✅ Docker：Docker用于容器化和部署应用程序。它提供了一种轻量级、可移植和可扩展的方式来打包和分发应用程序及其依赖。
    - ✅ AWS：AWS（Amazon Web Services）用于基于云的托管和扩展。它提供了一系列云计算服务，包括虚拟服务器、存储、数据库、身份验证等，可帮助你构建和扩展应用程序。
    - ✅ DevOps最佳实践：DevOps是一种将开发（Development）和运维（Operations）相结合的方法论，旨在促进敏捷、协作的开发流程。你的项目应用了DevOps的最佳实践，这可能包括自动化构建、持续集成、持续交付等。
    - ✅ JavaScript和React：JavaScript是一种广泛用于前端开发的编程语言，React是一个流行的JavaScript库，用于构建用户界面。你的项目使用JavaScript和React来进行前端开发，以实现强大、响应式的用户界面。
    - ✅ Spring Security 6：Spring Security是一个用于保护应用程序的安全框架。你的项目使用Spring Security 6来实现安全、经过身份验证的应用程序。
    - ✅ 登录/注册系统：项目包含了登录/注册系统，用于管理用户的身份验证和管理。
    - ✅ TypeScript：TypeScript是一种静态类型的JavaScript超集，可提供类型安全和可扩展性。你的项目使用TypeScript编写类型安全、可扩展的代码。
    - 持久化框架是用于将应用程序中的数据持久化（即保存到持久存储介质如数据库中）的框架。在应用程序中，数据通常是在内存中临时存在的，当应用程序关闭或重启时，数据会丢失。为了将数据保存下来，需要将数据持久化到可靠的持久存储介质中，如数据库。
    - CI/CD

        
        CI/CD (Continuous Integration/Continuous Delivery) 是一种软件开发实践，旨在通过自动化和持续集成来提高软件交付的速度、质量和可靠性。
        
        CI（持续集成）是指将团队成员的代码变更频繁地合并到主干代码库中，并使用自动化构建和测试工具来验证代码的正确性。CI 的目标是尽早发现和解决代码集成问题，减少集成延迟和冲突，并提高团队协作效率。
        
        CD（持续交付/持续部署）是在 CI 的基础上进一步扩展，指的是自动化地将经过验证的代码交付到生产环境中。CD 的目标是缩短软件交付的周期，降低发布的风险，实现快速、可靠的软件发布。
        
        CI/CD 流程通常包括以下步骤：
        
        1. 代码管理：使用版本控制系统（如Git）管理代码，并将代码库作为团队的主干代码库。
        2. 持续集成：团队成员频繁地提交代码变更到主干代码库，并使用自动化构建工具（如Jenkins、Travis CI）对代码进行编译、测试和静态代码分析。
        3. 自动化测试：编写自动化测试用例，包括单元测试、集成测试和端到端测试，确保代码的正确性和稳定性。
        4. 构建和打包：将代码编译成可执行的软件包，并生成部署所需的配置文件和文档。
        5. 部署到测试环境：将构建好的软件包部署到测试环境中，并运行更全面的测试，包括回归测试、性能测试等。
        6. 自动化部署：将经过测试的代码自动部署到生产环境中，可以使用工具如Ansible、Docker、Kubernetes等来实现自动化部署。
        7. 监控和反馈：监控生产环境中的应用性能、稳定性和用户反馈，及时发现和解决问题，并反馈给开发团队进行改进。
        
        CI/CD 的好处包括减少人工错误、提高开发效率、加快交付速度、降低发布风险、增强软件质量和稳定性等。它适用于各种软件开发项目，特别是在敏捷开发、DevOps 等快速迭代和频繁发布的环境中更加重要。
        
        要实施 CI/CD，你需要选择适合的工具和技术栈，并建立适合你团队和项目需求的自动化流程。常见的工具和平台包括Jenkins、Travis CI、GitLab CI/CD、GitHub Actions等。你还需要编写合适的测试用例、配置自动化构建和部署流程，并确保团队成员具备相关的技能和知识。
        
        总之，CI/CD 是现代软件开发中的关键实践，可以帮助团队提高开发效率、软件质量和交付速度，从而更好地满足用户需求并保持竞争优势。

- 后端
    - 技术栈
        - docker
            - 运行
                
                在docker-compose.yml  目录下
                
                docker-compose up -d
                
            - 格式规范
                
                ```bash
                export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nIMAGE\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n”
                ```
                
            - 在容器中运行命令
                
                ```bash
                docker exec -it postgres sh
                ```
                
                - 具体来说，命令中的各个部分的含义如下：
                    - **`docker exec`**：这是 Docker 命令行工具的一部分，用于在正在运行的容器中执行命令。
                    - **`it`**：这是两个选项的组合，用于以交互式终端模式运行命令。 **`i`** 选项使得命令保持与终端的交互性，**`t`** 选项则为命令分配一个伪终端。
                    - **`postgres`**：这是容器的名称或容器 ID，表示要在其中执行命令的目标容器。在这种情况下，它是一个 PostgreSQL 容器。
                    - **`sh`**：这是要在容器中执行的命令。在这个例子中，它是一个简单的 "sh" 命令，它启动一个 Shell（通常是 Bourne Shell）会话。
                    - 综上所述，**`docker exec -it postgres sh`** 命令将在名为 "postgres" 的 PostgreSQL 容器中启动一个交互式 Shell 会话，使你能够在容器中执行命令和操作。
        - postgres
            - 连接到特定数据库
                
                ```bash
                psql -U amigoscode -d postgres
                ```
                
                - 具体来说，命令中的各个部分的含义如下：
                    - **`psql`**：这是 PostgreSQL 提供的一个交互式终端工具，用于与 PostgreSQL 数据库进行交互。
                    - **`U amigoscode`**：这是 psql 命令的一个选项，用于指定要连接到数据库的用户名。在这个例子中，用户名是 "amigoscode"。
                    - **`d postgres`**：这是 psql 命令的另一个选项，用于指定要连接的数据库名称。在这个例子中，数据库名称是 "postgres"。
                    
                    综上所述，**`psql -U amigoscode -d postgres`** 命令将使用 psql 工具连接到 PostgreSQL 数据库，并使用 "amigoscode" 用户身份连接到名为 "postgres" 的数据库。这将打开一个交互式终端会话，允许你在数据库中执行 SQL 查询和操作。
                    
            - 连接到数据库后的常用操作
                
                ```bash
                \l :显示所有数据库
                \c A : 切换到数据库A
                \d:  显示describ该数据库的所有表
                \x:  expanded display on
                ```
                
            - ctrl+d : 退出
        - 同时使用jpa ,jdbc
        - AWS SDK  for Java  (S3)
            - pom.xml
                
                ```xml
                	
                				<dependency>
                            <groupId>software.amazon.awssdk</groupId>
                            <artifactId>s3</artifactId>
                            <version>2.20.26</version>
                        </dependency>
                ```
                
            - 本地运行环境要有凭证
                
                `%USERPROFILE%\.aws\config`
                
                `%USERPROFILE%\.aws\credentials`
                
            - s3Client
                
                ```java
                @Configuration
                public class S3Config {
                
                    @Value("${aws.region}")
                    public String awsRegion;
                    @Bean
                    public S3Client s3Client(){
                        S3Client client = S3Client.builder()
                                .region(Region.of(awsRegion))
                                .build();
                        return client;
                    }
                }
                ```
                
            - putObject
                
                ```java
                public void putObject(String bucketName,String key,byte[] file){
                        PutObjectRequest objectRequest = PutObjectRequest.builder()
                                .bucket(bucketName)
                                .key(key)
                                .build();
                
                        s3Client.putObject(objectRequest, RequestBody.fromBytes(file));
                    }
                ```
                
            - getObject
                
                ```java
                public byte[] getObject(String bucketName,String key ){
                        GetObjectRequest getObjectRequest = GetObjectRequest
                                .builder()
                                .bucket(bucketName)
                                .key(key)
                                .build();
                        ResponseInputStream<GetObjectResponse> res= s3Client.getObject(getObjectRequest);
                
                        try {
                            return res.readAllBytes();
                        } catch (IOException e) {
                            throw new RuntimeException(e);
                        }
                    }
                ```
                
        - jpa repository
            
            ```java
            @Modifying
                @Query(" UPDATE Customer c SET c.profileImageId =?1 WHERE c.id=?2")
                int updateProfileImageId(String profileImageId,Integer customerId);
            ```
            
    - 学习
        - aws s3
            
            Amazon Simple Storage Service (Amazon S3) 是一种对象存储服务，提供行业领先的可扩展性、数据可用性、安全性和性能。各种规模和行业的客户可以为几乎任何使用案例存储和保护任意数量的数据，例如数据湖、云原生应用程序和移动应用程序。借助高成本效益的存储类和易于使用的管理功能，您可以优化成本、组织数据并配置精细调整过的访问控制，从而满足特定的业务、组织和合规性要求。
            
            ![Untitled](./img/s3intro.png)
            
        - @Configuration
            
            这样可以直接访问app.yml中的配置
            
            ```java
            @Configuration
            @ConfigurationProperties(prefix = "aws.s3.buckets")
            public class S3Buckets {
                public String getCustomer() {
                    return customer;
                }
            
                public void setCustomer(String customer) {
                    this.customer = customer;
                }
            
                public String customer;
            
            }
            ```
            
        - java  也可以用var
        - DTO & DAO
            
            DTO（Data Transfer Object）和DAO（Data Access Object）是在软件开发中常见的两个概念，它们分别用于不同的目的。
            
            1. DTO（Data Transfer Object）：
                - DTO 是一种数据传输对象，用于在不同层或组件之间传输数据。
                - DTO 通常是一个简单的数据容器，用于封装需要传输的数据字段和对应的访问方法（getter 和 setter）。
                - DTO 的设计目的是以最小的开销和复杂性来传输数据。
                - DTO 用于解决不同层或组件之间的数据传输问题，可以隐藏底层实现细节，减少网络开销，并解决版本兼容性问题。
            2. DAO（Data Access Object）：
                - DAO 是一种数据访问对象，用于封装对数据源的访问和操作。
                - DAO 提供了一组抽象的接口或方法，用于执行对数据源的常见操作，如增删改查（CRUD）。
                - DAO 的设计目的是将数据访问逻辑与业务逻辑分离，提供统一的数据访问接口。
                - DAO 可以隐藏底层数据库的实现细节，提供更高级别的数据操作方法，使业务层能够以更简洁和高层次的方式进行数据访问。
        - JDBC & JPA
            
            JDBC（Java Database Connectivity）和 JPA（Java Persistence API）是 Java 中用于与数据库进行交互的两个重要技术。
            
            1. JDBC（Java Database Connectivity）：
                - JDBC 是 Java 提供的一组用于与关系型数据库进行交互的 API。
                - 通过 JDBC，开发人员可以使用 Java 代码来连接、执行 SQL 语句、处理结果集等与数据库相关的操作。
                - JDBC 提供了一套标准的接口，开发人员需要手动编写与数据库交互的代码，包括建立数据库连接、创建和执行 SQL 语句、处理结果集等。
                - JDBC 直接面向数据库，需要开发人员手动处理 SQL 语句和数据库连接等细节。
            2. JPA（Java Persistence API）：
                - JPA 是 Java 提供的一套对象关系映射（ORM）规范，用于简化应用程序与数据库之间的交互。
                - JPA 提供了一种面向对象的方式来进行数据库访问，将数据库表和 Java 对象进行映射，通过操作 Java 对象来间接操作数据库。
                - JPA 隐藏了底层数据库的细节，开发人员可以通过定义实体类、注解和配置文件来描述数据库表和关系，而不需要手动编写 SQL 语句。
                - JPA 提供了一系列的API和查询语言（如JPQL），使开发人员能够进行常见的数据库操作，如插入、更新、删除和查询等。
        - 三引号
            
            使用了三引号 **`"""`** 来定义多行字符串。三引号允许在字符串中包含多行文本，而不需要使用转义字符或换行符。
            
        - String.isBlank & isEmpty
        - servlet & springboot
            
            Servlet 和 Spring Boot 是相关但不同的概念。
            
            Servlet 是 Java 技术的一部分，用于开发基于服务器的 Web 应用程序。Servlet 是在服务器端执行的 Java 类，用于处理客户端发送的请求并生成响应。它提供了处理动态内容、生成 HTML 页面、访问数据库、进行身份验证和授权等功能。Servlet 是 Java Web 开发的核心组件之一。
            
            Spring Boot 是一个用于创建和部署独立、生产级别的 Spring 应用程序的框架。它简化了 Spring 应用程序的开发过程，并提供了自动配置、约定优于配置、快速开发等特性。Spring Boot 构建在 Spring 框架之上，利用了 Spring 的各种功能和模块。
            
            在 Spring Boot 中，Servlet 是一种可以使用的技术。Spring Boot 内置了嵌入式的 Servlet 容器（如 Tomcat、Jetty 等），可以直接在应用程序中使用 Servlet 技术。开发人员可以编写 Servlet 类，并将其注册为 Spring Boot 应用程序的一部分，以处理请求和生成响应。
            
            Spring Boot 提供了 Spring MVC 框架，它是基于 Servlet 的 Web 框架，用于处理 Web 请求和构建 RESTful API。Spring MVC 使用 Servlet 技术作为底层实现，但提供了更高级的抽象和功能，使开发人员可以更轻松地构建 Web 应用程序。
            
            因此，Servlet 是一种底层的 Java 技术，而 Spring Boot 是一个构建在 Servlet 之上的框架，用于简化和加速 Java Web 应用程序的开发过程。Spring Boot 提供了与 Servlet 相关的功能和集成，但也扩展了更多的功能和特性，使开发人员能够更便捷地开发现代化的 Web 应用程序。
            
        - jwt
            
            JWT（JSON Web Token）是一种用于在网络应用之间安全传递信息的开放标准（RFC 7519）。它是一种紧凑的、自包含的方式，用于在用户和服务器之间传递认证和授权信息。
            
            JWT由三部分组成：头部（Header）、载荷（Payload）和签名（Signature）
            
        
- 前端
    - 技术栈
        
        react
        
    - npm包
        
        react-dropzone
        
    - 学习
        - jwtDecode
            
            **`jwtDecode`**是一个用于解码 JSON Web Token (JWT) 的 JavaScript 库。JWT 是一种用于在不同系统之间安全传输信息的令牌。它由三部分组成：头部（Header）、载荷（Payload）和签名（Signature）。
            
            **`jwtDecode`** 库允许您将 JWT 令牌解码为一个 JavaScript 对象，以便查看和提取其中的信息。通过解码 JWT，您可以获得令牌中包含的用户身份、角色、权限等信息，以便进行身份验证和授权。
            
