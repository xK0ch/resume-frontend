pipeline {
  agent any

  tools {
    nodejs '22.12.0'
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker compose -f docker-compose-resume-frontend.yml down'
        sh 'docker image prune -af'
        sh 'docker compose -f docker-compose-resume-frontend.yml up --build -d'
      }
    }
  }
}
