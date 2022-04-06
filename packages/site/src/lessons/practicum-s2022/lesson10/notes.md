```sh
#!/bin/bash
cd /home/ec2-user
sudo yum install -y java-17-amazon-corretto
aws s3 cp s3://my-pocket/data.jar .
aws s3 cp s3://my-pocket/real-estate-data.csv .
aws s3 cp s3://my-pocket/newrelic.yml .
aws s3 cp s3://my-pocket/newrelic-agent.jar .
curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=NRAK-0F9RUEME3E0O0SE28LCX46UKQH8 NEW_RELIC_ACCOUNT_ID=3379731 /usr/local/bin/newrelic install
cat <<EOT > /etc/newrelic-infra/logging.d/application.yml
logs:
  - name: housing-data
    file: /home/ec2-user/housing-app.log
EOT
nohup java -javaagent:./newrelic-agent.jar -jar data.jar &
```
6QwI2wOH$r8p9%ci