pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "loservijay/ecommerce-project-mern"
    DOCKER_CREDENTIALS_ID = "dockerhub"  // Your DockerHub credentials ID
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/loservijay/ecommerce-project-mern.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          sh '''
            docker build -t $DOCKER_IMAGE ./server
            echo $PASS | docker login -u $USER --password-stdin
            docker push $DOCKER_IMAGE
          '''
        }
      }
    }

    stage('Deploy to EKS') {
      steps {
        sh '''
          aws eks update-kubeconfig --region ap-south-1 --name alo
          kubectl apply -f k8s/deployment.yaml
          kubectl apply -f k8s/service.yaml
        '''
      }
    }
  }
}
