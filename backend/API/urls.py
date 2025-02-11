from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.api_view.as_view() , name='api_view'),
    path('<int:pk>/', views.api_view.as_view(), name='api_view')
]