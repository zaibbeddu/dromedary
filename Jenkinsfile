pipeline {
    agent any
    stages {
        stage('Building Docker Container') {
            steps {
                echo "Setting up the docker container"
                sh 'docker build -t dromnode .'
            }
        }
        stage('Testing') {
            steps {
                echo "Running gulp test"
                sh 'docker run --network=${LDOP_NETWORK_NAME} --name stelligent-dromedary-testing dromnode gulp test'
            }
        }
        stage('Run local container') {
            steps {
                sh 'docker run -p 18080:8080 -d --network=${LDOP_NETWORK_NAME} --name stelligent-dromedary dromnode'
                echo "Should be accessible at http://localhost:18080"
            }
        }
    }
}
