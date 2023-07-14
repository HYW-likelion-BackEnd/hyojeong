from django.shortcuts import render, redirect
from .models import *
# from .forms import ReviewForm

# def review_new(request):
#     if request.method == 'POST' :
#         form = ReviewForm(request.POST)
#         if form.is_valid() :
#             review = form.save(commit=False)
#             review.save()
#             return redirect('/', pk = review.pk)
#     else :
#         form = ReviewForm()

#     return render(request, 'yeogi/street-safety-comment.html', {'form' : form})

def home(request):
    review_list = Review.objects.all()
    return render(request, 'home.html',{'review_list':review_list} )

def search(request):
    return render(request, 'search.html')

def select(request, id):
    # bowery = Bowery181.objects.get(id = id)
    # return render(request, 'select.html', {'bowery': bowery})
    bowery = Bowery181.objects.get(id = id)
    return render(request,'select.html', {'bowery':bowery})

def store_safety_comment(request):
    return render(request, 'store-safety-comment.html')

def store_safety(request):
    return render(request, 'store-safety.html')

def street_safety_comment(request):
    if request.method =='POST':
        content = request.POST.get('content')
        Review.objects.create(
            content= content,
        )
        return redirect('select') #후기 페이지로
    else:
        light = request.GET.get('light')
        people = request.GET.get('people')
        clear = request.GET.get('clear')
        Review.objects.create(
            light=light,
            people=people,
            clear=clear
        )
        return render(request, 'street-safety-comment.html')

def street_safety(request):
    # if request.method == 'GET':
    #     light = request.GET.get('light')
    #     people = request.GET.get('people')
    #     clear = request.GET.get('clear')
    #     Review.objects.create(
    #         light=light,
    #         people=people,
    #         clear=clear
    #     )
    return render(request, 'street-safety.html')

def detail_review(request,id):
    review = Review.objects.get(id=id)
    return render(request, 'detail_review.html', {'review':review})

def select_a(request, id):
    broom = Broome334.objects.get(id = id)
    return render(request, 'select_a.html', {'broom': broom})

def select_c(request, id):
    ken = Kenmare.objects.get(id = id)
    return render(request, 'select_c.html', {'ken': ken})

def select_h(request, id):
    che = Chrystie.objects.get(id = id)
    return render(request, 'select_h.html', {'che': che})