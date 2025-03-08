from django.shortcuts import render , redirect , get_object_or_404
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth.models import User
from .models import Student 
from .models import Post
from  django.contrib.auth import login,logout, authenticate
# Create your views here.



def display(req):
    return render(req, 'navigate.html')
# def display(req):
#     return render(req, 'Home.html')
def createUser(req):
    if req.method == 'POST':
        user = User()
        user.first_name =req.POST.get('firstName')
        user.last_name=req.POST.get('lastName')
        user.username = req.POST.get('username')
        user.email = req.POST.get('email')
        user.set_password(req.POST.get('password'))
        user.save()
        return HttpResponse('User created')
    else:
       messages.error(req, 'Error')
       return render(req, 'Register.html')


def Home(req):
    object = Post.objects.all()
    if req.method == 'POST':
        post= Post()
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post created successfully!')
        return redirect('Home')
    else:
        messages.error(req, 'erro creating post')
    return render(req, 'Home.html', {'object': object})

def create(req):
    object = Post.objects.all()
    if req.method == 'POST':
        post= Post()
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post created successfully!')
        return redirect('Home')
    else:
        messages.error(req, 'erro creating post')
    return render(req, 'create.html', {'object': object})





def adit( req, post):
    post = get_object_or_404(Post, id=post)
    if req.method == 'POST':
        post.name = req.POST.get('name')
        post.description = req.POST.get('description')
        post.image = req.FILES.get('image')
        post.save()
        messages.success(req, 'Post updated successfully!')
        return redirect('home')
    return render(req, 'create.html', {'post': post})

def delete_post(req, post):
    post = get_object_or_404(Post, id=post)
    post.delete()
    messages.success(req, 'Post deleted successfully!')
    return redirect('home')
    

def Student(req):
    if req.method == 'POST':
        student = Student()
        student.first_name = req.POST.get('first_name')
        student.last_name = req.POST.get('last_name')
        student.username = req.POST.get('username')
        student.email = req.POST.get('email')
        student.date_of_birth = req.POST.get('date_of_birth')
        student.save()
        return HttpResponse('Student created')
    return render(req, 'student.html')
    

def __str__(self):
    return f"{self.first_name} {self.last_name}"


def Userlogin(req):
    if req.method =='POST':
       Username = req.POST.get("username")
       password = req.POST.get("password")

       user =authenticate(req, username = Username , password= password)
       print(user)
       if user is not None:
        login(req, user)
        return redirect('login')
    return render(req, 'login.html')


def Userlogout(req):
    if req.method == 'POST':
        logout( req )
        return redirect('login')
        
    else:
        messages.error(req, 'Error')
    return render(req, 'logout.html')





#  object = Post.objects.all()
#     if req.method =='POST':
#         post = Post()
#         post.name =req.POST.get('name')
#         post.description =req.POST.get('description')
#         post.imgae =req.FILES.get('image')
#         Post.save()
#         messages.success('post create successfully ! ')
#         return redirect('home')
#     else:
#         messages.error( req ,'error creating post')


#  result = Post(name=name, description=description, image=image)
#         result.save()