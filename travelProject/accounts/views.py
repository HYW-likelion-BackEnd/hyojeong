from django.shortcuts import render,redirect
from django.contrib import auth
from django.contrib.auth.models import User

# Create your views here.
def join(request):
	if request.method == "POST":
		if request.POST['input-pwd'] == request.POST['re-input-pwd']:
			new_user = User.objects.create_user(username=request.POST['input-id'], password=request.POST['input-pwd'])
			auth.login(request, new_user)
			print('회원가입 성공')
			return redirect('home')
	else :
		return render(request, 'join.html')

def login(request):
	if request.method == "POST" :
		username = request.POST["input-id"]
		password = request.POST["input-pwd"]
		user = auth.authenticate(request, username=username, password=password)
		
		if user is not None :
			auth.login(request, user)
			print("로그인 성공")
			return redirect('home')
		else :
			return render(request, 'bad_login.html')
	else :
		return render(request, 'login.html')
	
def logout(request):
    auth.logout(request)
    return redirect('home')