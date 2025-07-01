pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "loservijay/ecommerce-project-mern"
    DOCKER_CREDENTIALS_ID = "dockerhub"  // must match the ID you saved in Jenkins credentials
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/loservijay/ecommerce-project-mern.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", passwordVariable: 'PASS', usernameVariable: 'USER')]) {
          sh '''
            docker build -t $DOCKER_IMAGE .
            echo $PASS | docker login -u $USER --password-stdin
            docker push $DOCKER_IMAGE
          '''
        }
      }
    }
  }
}
