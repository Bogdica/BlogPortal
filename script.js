
var header=document.getElementById('header');    
var page=document.getElementById('page')
var loginForm= document.getElementById('form-login');
var singupForm= document.getElementById('form-singup');

var users=[];
console.log(users)

//LOG IN
function login(){
    var email= document.getElementById('email');
    var password= document.getElementById('psw');
    var username=document.getElementById('user-name');
    var error=document.getElementById('error');
    var userInfo= document.getElementById('user-info');

    for(var user of users){
        if((email.value===user.email || email.value===user.username) && password.value===user.password){
            page.classList.remove('none');
            loginForm.classList.add('none');
            error.classList.add('none');
            header.classList.remove('none');
            userInfo.innerHTML=user.firstName + ' ' +' ' + user.lastName;
        }else{
            error.classList.remove('none');
            error.innerHTML='Pogrešan unos!!! Pokusajte ponovno!!!'
        }
    }
}

function loginOnEnter(event){
  //  console.log(event)
    if(event.keyCode===13){
        login()
    }
  
}

//LOG OUT
function logout(){
    header.classList.add('none');
    loginForm.classList.remove('none');
    page.classList.add('none')
}

//SING UP
function singup(){
    singupForm.classList.remove('none');
    loginForm.classList.add('none');
    page.classList.add('none')

}

function saveSingup(){
    var user={
        firstName:getValue('firstname'),
        lastName:getValue('lastname'),
        email:getValue('email-singup'),
        username:getValue('user-name-singup'),
        password:getValue('psw-singup'),
        confirmPassword:getValue('conf-psw')
    }
    users.push(user);
    var error1=document.getElementById('error1');
    var privatyPolicy=document.getElementById('check-box')
        for(var user of users){
            if((user.firstName !=='' && user.lastName !=='' && user.email !=='' && user.username !=='' && user.password !=='' && user.confirmPassword !=='')&&(user.password===user.confirmPassword) && privatyPolicy.checked == true){
                    loginForm.classList.remove('none');
                    singupForm.classList.add('none');
                    error1.classList.add('none')
                }else{
                    loginForm.classList.add('none')
                    error1.classList.remove('none');
                    error1.innerHTML='Niste popunili sva polja,trebate prihvatiti uslove privatnosti!!!   Pokusajte  ponovno!!!';
            
                }
        }
}

function getValue(id){
    return document.getElementById(id).value;
}

var div= document.getElementById('privacy');
function privatyPolicy(){
   div.innerHTML='Ne krademo podatke samo vježbamo :)'
   div.classList.remove('none')
}

function livePrivacy(){
    div.classList.add('none');
}

setInterval(function(){
    var time=document.querySelector('.time');
    var date= new Date().toDateString();
    var hours=new Date().toLocaleTimeString();
    time.innerHTML=date +' ' +hours;
},1000);

//FORM BLOG
///1
var myBlogForm=document.getElementById('form-blog');
var myBlogFormPost=document.getElementById('myblog-form-post');

var blogPosts=[
    {
        headerTitle: 'Čarolije knjige...',
        subtitle: 'Usudi se.pročitaj moje tajne,osjeti miris proslosti i zamisli budučnost.',
        dateOfPost: '23.2.2021',
        imagePost:'https://d2vx7hn49802k2.cloudfront.net/wp-content/uploads/2019/07/woman-reading-a-book-on-the-beach.jpg',
        textOfPost: '  „Onaj tko ne voli čitati nije pronašao pravu knjigu za sebe.” – J.K. Rowling „Oh, kako je dobro biti među ljudima koji čitaju knjige.” – Rainer Maria Rilke„Postoje gora zlodjela od paljenja knjiga. Jedno od njih je ne čitati knjige.” – Josip Brodsky„Knjiga je dar koji možeš otvarati opet i opet.” – Garrison Kellior„Čovjek koji ne čita dobre knjige nije nimalo bolji od čovjeka koji uopće ne čita.” – Mark Twain„Znaš da si pročitao dobru knjigu kada nakon što pročitaš zadnju stranicu se osjećaš kao da si izgubio prijatelja.” – Paul Sweeney „Jednog sam dana pročitao knjigu i cijeli mi se život promijenio.” – Orhan Pamuk',
        brojLike: '0'
    }
];

refreshView()
///2
function clickToPostBlog(){
    myBlogForm.classList.remove('none');
    myBlogFormPost.classList.add('none');
    
}


///3
function savePostedBlog(){
    myBlogForm.classList.add('none');
    var postCardForm={
        headerTitle:getValue('header-form'),
        subtitle: getValue('subtitle'),
        dateOfPost: setDate(),
        imagePost: getValue('img-form'),
        textOfPost: getValue('text-blog')
    }
    blogPosts.push(postCardForm);
   // console.log(blogPosts)
    refreshView()
    myBlogFormPost.classList.remove('none');
    
}
//4
function refreshView(){
    var myBlogFormPost=document.getElementById('myblog-form-post');
    myBlogFormPost.innerHTML=''
    for(var i=0;i<blogPosts.length;i++){
        var index=blogPosts[i];
        var blogPost=document.createElement('div');
        blogPost.id='form-blog-post';
        var headerPost=document.createElement('h1');
        headerPost.innerHTML=index.headerTitle;
        var subtitlePost=document.createElement('h3');
        subtitlePost.innerHTML=index.subtitle;
        var datePost=document.createElement('p');
        datePost.innerHTML=index.dateOfPost;
        var imgPost=document.createElement('img');
        imgPost.src=index.imagePost;
        var textPost=document.createElement('p');
        textPost.innerHTML=index.textOfPost;

        var comentAreaDiv=document.createElement('div');
        var titleComent=document.createElement('p');
        titleComent.className='post-coment';
        titleComent.innerHTML='KOMENTARI: ';
        var likeParagraf=document.createElement('p');
        var likeBtn=document.createElement('button');
        likeBtn.id='like-btn';
        likeBtn.innerHTML='Like'
        
        var span=document.createElement('span')
        span.innerHTML= '0'
       // console.log(span);
        likeBtn.appendChild(span)
       
        likeBtn.onclick=function(event){
            var currentLikes = event.currentTarget.children[0].innerHTML;
            var clickes = parseInt(currentLikes) + 1
            event.currentTarget.children[0].innerHTML = clickes;
        }

        var comentParagraf=document.createElement('p');
        var comentBtn=document.createElement('button');
        comentBtn.id='coment-btn';
        comentBtn.innerHTML='Komentar';
        comentBtn.onclick=function(){
            var commentAreaOpen=document.createElement('div');
            commentAreaOpen.id='coment'
            var comentArea=document.createElement('textarea');
            comentArea.id='coment-area';
            comentArea.placeholder='Unesite komentar....Dodajte svoj stav  o ovoj temi...';
            comentArea.cols='80',
            comentArea.rows='10'
            comentArea.className='coment';
            var saveCommentBtn=document.createElement('button');
            saveCommentBtn.id='btn-savecoment';
            saveCommentBtn.innerHTML='Save Coment';
            saveCommentBtn.onclick=function(){
            var footer=document.createElement('div');
            footer.id='posted-coment'
            footer.innerHTML=comentArea.value;
            var header=document.createElement('p');
            var user={
                firstName:getValue('firstname'),
                lastName:getValue('lastname'),
                 }
            header.innerHTML=`Posted by: ${user.firstName} ${user.lastName}` ;
            header.style='float:left;font-size:12px;color:#E7555D;margin:10px;padding: 10px'
            var trash=document.createElement('i');
            trash.className='fas fa-trash-alt';
            trash.style='float:right;font-size:16px;cursor:pointer;margin:10px;padding: 10px';
            trash.onmouseover=function(){
                trash.style='color:#EA0D17;float:right;font-size:16px   cursor:pointer;margin:10px;padding: 10px'
            }
            trash.onmouseout=function(){
                trash.style='color:#000;float:right;font-size:16px  cursor:pointer;margin:10px;padding: 10px'
            }
            trash.onclick=function(){
               footer.classList.add('none');
            }
            
            footer.appendChild(header);
            footer.appendChild(trash)
            comentAreaDiv.appendChild(footer);
            commentAreaOpen.classList.add('none')
            }
          
            commentAreaOpen.appendChild(comentArea);
            commentAreaOpen.appendChild(saveCommentBtn);
            comentAreaDiv.appendChild(commentAreaOpen);
          
        }


        blogPost.appendChild(headerPost)
        blogPost.appendChild(subtitlePost)
        blogPost.appendChild(datePost)
        blogPost.appendChild(imgPost)
        blogPost.appendChild(textPost)
        myBlogFormPost.appendChild(blogPost);
        comentAreaDiv.appendChild(titleComent)
        comentAreaDiv.appendChild(likeParagraf)
        likeParagraf.appendChild(likeBtn)
        comentAreaDiv.appendChild(comentParagraf);
        comentParagraf.appendChild(comentBtn);
        myBlogFormPost.appendChild(comentAreaDiv);
    }
}

function setDate(){
    var today = new Date().toISOString().substr(0, 10);
   return document.getElementById('date-form').value=today;
}
