pipeline {
    agent none
    stages {
        stage('Building Docker Container') {
            agent {
              docker {
                image 'node:8.1.4'
                args '-e INITIAL_ADMIN_USER -e INITIAL_ADMIN_PASSWORD --network=${LDOP_NETWORK_NAME}'
              }
            }
            steps {
                echo 'Setting up the docker container'
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
