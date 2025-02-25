from django.db import models

# Create your models here.



class Post(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField( max_length=50)
    image = models.ImageField( upload_to='images/')

    def __str__(self):
        return self.name
    

    
class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    date_of_birth = models.DateField()

    def __str__(self):
        return self.first_name
    


    
    