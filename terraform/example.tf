provider "aws" {
  profile    = "vikram"
  region     = "ap-southeast-1"
  shared_credentials_file = "$HOME/.aws/credentials"
}

resource "aws_instance" "immersive-ibm-umove" {
#  ami           = "ami-00d7d1cbdcb087cf3"
  ami           = "ami-061eb2b23f9f8839c"
  instance_type = "t2.large"
  subnet_id = "subnet-01681a9f3a326e006"
  key_name = "${aws_key_pair.umove_key.key_name}"
}

resource "aws_key_pair" "umove_key" {
  key_name = "ravi"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC9XS9MJ+G1L9W732aWUfljnUDgSWQsTt1phJs+xN33ZCrnldkB9xyt4e1jHM8iFU3bL8WFbSRvpgVoSJF8E0+yf15dzE6+xADRQL4qhs5J65D5i2kaSs4r4uRHDjnRsDS+/JWyyJ88V+vM4GzsWy8qn0Y15S82+AfpJlxavla+nXsZTsSbOrR6d3aL8mrwyDsRSwFkOrsMFi3yP35lK33asrrsbars4le7DKv/ONgjT+wIPVf62OjsU9eyvyPXwQVOvaNKbtGU+f3q44d4QpfFuKACwOsIDazJEAdR1wTKqZ0Ks6tRmDOeSbvOdwsmaI02cO9oMlaoA46VX1AhAyDB jenkins-immersive"
}

resource "aws_security_group_rule" "ssh_allow" {
  type            = "ingress"
  from_port       = 22
  to_port         = 22
  protocol        = "tcp"
  # Opening to 0.0.0.0/0 can lead to security vulnerabilities.
#  cidr_blocks = # add a CIDR block here
#  prefix_list_ids = ["pl-12c4e678"]
  self = "true"
#  security_group_id = "sg-a9f096c5"
  security_group_id = "sg-061a4cc1d3d8ba82c"
}

resource "aws_security_group_rule" "allow_app_ports" {
  type            = "ingress"
  from_port       = 8000
  to_port         = 9000
  protocol        = "tcp"
  # Opening to 0.0.0.0/0 can lead to security vulnerabilities.
#  cidr_blocks = # add a CIDR block here
#  prefix_list_ids = ["pl-12c4e678"]
  self = "true"
#  security_group_id = "sg-a9f096c5"
  # security_group_id = "sg-0599900f4ab1d8cb8"
  security_group_id = "sg-061a4cc1d3d8ba82c"
}

output "public_ip_address" {
  value = "${aws_instance.immersive-ibm-umove.public_ip}"
}