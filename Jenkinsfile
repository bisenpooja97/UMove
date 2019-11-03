pipeline {
    agent any

    environment {
        MY_IP  = 'ip'
    }
    stages {
        stage('Spinup VM') {
            when { branch 'master' }
            steps {
                sh 'cd terraform ; terraform init'
                // sh 'cd terraform ; terraform destroy -state=${HOME}/tfstates/terraform-helpdesk.tfstate -auto-approve'
                //  Change this
                sh 'cd terraform ; terraform apply -state=${HOME}/tfstates/terraform-umove.tfstate -auto-approve'
                // Changre thio
                script{
                    MY_IP = sh(returnStdout: true, script: 'terraform output -state=${HOME}/tfstates/terraform-umove.tfstate public_ip_address').trim()
                }
            }
        }
        stage('Node tools installation and application start') {
            when { branch 'master' }
            steps {
                sh "sleep 20"
                sh "echo ${MY_IP} ansible_ssh_user=ubuntu > ./ansible/host"
                sh 'cd ansible ; cat host'
                sh 'cd ansible ; ansible-playbook -i host playbook.yml'
            }
        }
    }
}