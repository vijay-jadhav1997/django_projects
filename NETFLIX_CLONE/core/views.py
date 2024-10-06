from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, update_session_auth_hash

# Create your views here.
def home(request):
  return render(request, 'core/home.html',)


def user_login(request):
  return render(request, 'core/login.html',)