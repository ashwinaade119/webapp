sudo apt update
sudo apt install git -y
git --version
ls
su -
git clone https://github.com/ashwinaade119/don-t-touch-.git
ls
cd don-t-touch-/
ls
mkdir html
cd html/
ls
vi index.html
vi script.js
ls
vi style.css
ls
cd ..
cd html/
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/ashwinaade119/webapp
git config --list
git pull origin main
   27  https://github.com/ashwinaade119/webapp.git
   28  cd ..
   29  https://github.com/ashwinaade119/webapp.git
   30  ls
   31  cd html/
   32  git init
   33  git add .
   34  git commit -m "add html web app"
   35  https://github.com/ashwinaade119/webapp.git
   36  git remote add origin https://github.com/ashwinaade119/webapp.git
   37  git remote -v
   38  git branch
   39  git push -u origin master
   40  git push origin master
   41  cd ..
   42  cd
   43  git clone https://github.com/ashwinaade119/webapp.git
   44  ls
   45  cd webapp/
   46  ls
   47  vi Dockerfile
   48  sudo apt update
   49  sudo apt install docker.io -y
   50  docker --version
   51  sudo systemctl start docker
   52  sudo systemctl enable docker
   53  docker build -t my-web-app .
   54  sudo usermod -aG docker ubuntu
   55  docker build -t my-web-app .
   56  tail /etc/passwd
   57  su ubuntu
   58  sudo docker build -t my-web-app .
   59  sudo docker run -d -p 80:80 my-web-app
   60  docker ps 
   61  sudo docker ps 
   62  history 
   63  ls
   64  history
   65  cat file >> history
   66  cat file > history
   67  cat history >> file
   68  ls
   69  vi file 
   70  cat history >> file
   71  touch history >> file
   72  cat file 
   73  echo history >> file
   74  cat file 
   75  echo file >> history 
   76  cat file 
   77  ls
   78  docker ps
   79  docker ps -a
   80  docker images
   81  docker rm 107.22.148.0
   82  docker rm dedf686e0650
   83  docker rmi d11ebeaff5d6
   84  sudo docker build -t my-web-app .
   85  ls
   86  cd webapp/
   87  sudo docker build -t my-web-app .
   88  sudo docker run -d -p 80:80 my-web-app
   89  docker ps
   90  ls
   91  cat Dockerfile 
   92  history
