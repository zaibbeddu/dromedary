pipeline {
    agent any
    stages {
        stage('Building Docker Container') {
        /*
            agent {
              docker {
                image 'node:8.1.4'
                args '-e INITIAL_ADMIN_USER -e INITIAL_ADMIN_PASSWORD --network=${LDOP_NETWORK_NAME}'
              }
            }
        */
            steps {
                echo 'Setting up the docker container'
                sh 'docker build -t node:8.1.4 .'
                sh 'docker run -p 18080:8080 -d --network=${LDOP_NETWORK_NAME} --name stelligent-dromedary'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
