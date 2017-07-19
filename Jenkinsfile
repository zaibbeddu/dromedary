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
                sh 'docker build -t dromnode .'
                sh 'docker run -p 18080:8080 -d --network=${LDOP_NETWORK_NAME} --name stelligent-dromedary dromnode'
                echo "Should be accessible at http://localhost:18080"
            }
        }
        stage('Pulling down latest Dromedary') {
            steps {
                echo 'Pulling....'
            }
        }
        stage('Installing Dependencies') {
            steps {
                echo 'Installing....'
            }
        }
        // Other stages like code quality analysis could go here?
        stage('Testing') {
            steps {
                echo 'Testing....'
                //sh 'gulp test'
            }
        }
        stage('Running Dromedary') {
            steps {
                echo 'Running....'
            }
        }
    }
}
