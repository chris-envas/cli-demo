pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build(job: 'sdsad', propagate: true, quietPeriod: 1, wait: true)
        echo 'llll'
        timeout(time: 5, activity: true, unit: 'DAYS') {
          retry(count: 3) {
            sh 'cool'
          }

        }

        withGradle()
      }
    }

  }
}