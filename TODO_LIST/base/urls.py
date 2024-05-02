from django.urls import path
from .views import home, TaskList, TaskDetail, TaskCreate, TaskUpdate, TaskDelete, UserRegisterView, UserLoginView, Index
from django.contrib.auth.views import LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView

urlpatterns = [
    path('', home, name='home'),
    path('register/', UserRegisterView.as_view(), name='signup'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='home'), name='logout'),
    path('password_reset/', PasswordResetView.as_view(template_name='base/pswd_reset.html'), name='pswd_reset'),
    path('password_reset/done/', PasswordResetDoneView.as_view(template_name='base/pswd_reset_done.html'), name='password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>', PasswordResetConfirmView.as_view(template_name='base/pswd_reset_confirm.html'), name='pswd_reset_confirm'),
    path('password_reset_complete/', PasswordResetCompleteView.as_view(template_name='base/pswd_reset_complete.html'), name='pswd_reset_complete'),
    path('tasks/', TaskList.as_view(), name='tasks'),
    path('task/<int:pk>', TaskDetail.as_view(), name='task'),
    path('task_create/', TaskCreate.as_view(), name='task_create'),
    path('task_update/<int:pk>', TaskUpdate.as_view(), name='task_update'),
    path('task_delete/<int:pk>', TaskDelete.as_view(), name='task_delete'),
    path('index/', Index.as_view(), name='index')
]
