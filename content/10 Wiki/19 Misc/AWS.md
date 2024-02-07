---
tags:
  - Cloud
  - AWS
---
# Amazon Web Service

## AWS의 주요 서비스

### S3

- Simple Storage Service: AWS의 클라우드 스토리지 서비스
- 프론트엔드 애플리케이션을 정적인 파일로 빌드 후 저장

### CloudFront

- AWS의 CDN 서비스

### EC2

- Elastic Compute Cloud: AWS의 IaaS VM 서비스
- 백엔드 애플리케이션을 빌드 후 jar 파일을 실행하여 애플리케이션 서버로 동작함

### RDS

- Relational Database Service: AWS의 RDB 서비스
- RDB 설치 등 과정을 개발자가 직접 하지 않고 간편하게 사용할 수 있음

### Route 53

- AWS의 DNS 서비스
- 53: DNS의 TCP/UDP 포트번호
- 도메인을 설정할 때 사용

## AWS로 운영 환경 구성하기

### 웹 프론트엔드

- S3에 빌드된 파일을 업로드
- [Tutorial: Configuring a static website on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

### 데이터베이스

- EC2 등에 직접 설치하거나 RDS 활용 가능
- [What is Amazon Relational Database Service (Amazon RDS)?](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)

### 도메인 및 HTTPS 적용

- Route 53, ELB 활용
- [Tutorial: Configuring a static website using a custom domain registered with Route 53](https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html)
- [Create an HTTPS listener for your Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html)

## AWS CodePipeline을 활용한 CI/CD

### 환경 구축

- [Installing or updating the latest version of the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [Install the CodeDeploy agent for Ubuntu Server](https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html)

### CodeBuild

- [Build specification reference for CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html)

### CodeDeploy

- [CodeDeploy AppSpec File reference](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html)
- [AppSpec 'hooks' section](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html)

### CodePipeline

- [Create a pipeline that uses CodeBuild (CodePipeline console)](https://docs.aws.amazon.com/codebuild/latest/userguide/how-to-create-pipeline-console.html)
