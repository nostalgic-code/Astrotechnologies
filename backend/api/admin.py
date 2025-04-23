from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import BlogPost, Category

admin.site.register(BlogPost)
admin.site.register(Category)

#@25astro