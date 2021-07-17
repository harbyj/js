function JisShortCode(t,e,a){for(var i=t.split("$"),s=/[^{\}]+(?=})/g,l=0;l<i.length;l++){var r=i[l].split("=");if(r[0].trim()==e)return null!=(a=r[1]).match(s)&&String(a.match(s)).trim()}return!1}$(".post-body a").each(function(){var t=$(this),e=t.html(),a=e.toLowerCase(),i=JisShortCode(e,"text"),s=JisShortCode(e,"icon"),l=JisShortCode(e,"color");a.match("getbutton")&&0!=i&&(t.addClass("button btn").text(i),0!=s&&t.addClass(s),0!=l&&t.addClass("colored-button").attr("style","background-color:"+l+";"))}),$(".post-body b").each(function(){var t=$(this),e=t.text(),a=e.toLowerCase().trim();a.match(/(?:\$ads\=\{1\})/g)&&t.replaceWith('<div id="jistech-new-before-ad"/>'),a.match(/(?:\$ads\=\{2\})/g)&&t.replaceWith('<div id="jistech-new-after-ad"/>'),a.match("{jistoc}")&&(e=0!=JisShortCode(e,"title")?JisShortCode(e,"title"):"Table of Contents",t.replaceWith('<div class="jistoc-wrap"><div class="jistoc-inner"><a href="javascript:;" class="jistoc-title" role="button" title="'+e+'"><span class="jistoc-title-text">'+e+'</span></a><ol id="jistoc"></ol></div></div>'),$(".jistoc-title").each(function(t){(t=$(this)).on("click",function(){t.toggleClass("is-expanded"),$("#jistoc").slideToggle(170)})}),$("#jistoc").toc({content:"#post-body",headings:"h2,h3,h4"}),$("#jistoc li a").each(function(t){(t=$(this)).click(function(){return $("html,body").animate({scrollTop:$(t.attr("href")).offset().top-20},500),!1})}))}),$(function(){$("#back-top").each(function(){var t=$(this);$(window).on("scroll",function(){$(this).scrollTop()>=100?t.fadeIn(170):t.fadeOut(170),t.offset().top>=$("#footer-wrapper").offset().top-34?t.addClass("on-footer"):t.removeClass("on-footer")}),t.on("click",function(){$("html, body").animate({scrollTop:0},500)})})}),$("#jistech-new-before-ad").each(function(){var t=$(this);t.length&&$("#before-ad").appendTo(t)}),$("#jistech-new-after-ad").each(function(){var t=$(this);t.length&&$("#after-ad").appendTo(t)}),$("#jistech-main-before-ad .widget").each(function(){var t=$(this);t.length&&t.appendTo($("#before-ad"))}),$("#jistech-main-after-ad .widget").each(function(){var t=$(this);t.length&&t.appendTo($("#after-ad"))}),$("#jistech-post-footer-ads .widget").each(function(){var t=$(this);t.length&&t.appendTo($("#post-footer-ads"))}),$(".post-body blockquote").each(function(){var t=$(this),e=t.text().toLowerCase().trim(),a=t.html();if(e.match("{alertsuccess}")){const e=a.replace("{alertSuccess}","");t.replaceWith('<div class="alert-message alert-success">'+e+"</div>")}if(e.match("{alertinfo}")){const e=a.replace("{alertInfo}","");t.replaceWith('<div class="alert-message alert-info">'+e+"</div>")}if(e.match("{alertwarning}")){const e=a.replace("{alertWarning}","");t.replaceWith('<div class="alert-message alert-warning">'+e+"</div>")}if(e.match("{alerterror}")){const e=a.replace("{alertError}","");t.replaceWith('<div class="alert-message alert-error">'+e+"</div>")}if(e.match("{codebox}")){const e=a.replace("{codeBox}","");t.replaceWith('<pre class="code-box">'+e+"</pre>")}}),$(function(){var t=-1,e="";$(".main-menu-top").find("ul").find("li").each(function(){for(var a=$(this).text(),i=$(this).find("a").attr("href"),s=0,l=0;l<a.length&&-1!=(s=a.indexOf("_",s));l++)s++;if(level=l,level>t&&(e+="<ul class='menu'>"),level<t)for(offset=t-level,l=0;l<offset;l++)e+="</ul></li>";for(a=a.replace(/_/gi,""),e+="<li><a href='"+i+"'>",l=0;l<level;l++)e+="";e+=a+"</a>",t=level});for(var a=0;t>=a;a++)e+="</ul>",0!=a&&(e+="</li>");$("#main-menu .main-menu-top").html(e),$("#main-menu > .main-menu-top > ul").attr("id","menu-navigation"),$("#main-menu ul > li > ul").parent("li").addClass("menu-item-has-children"),$("#main-menu ul > li > ul").addClass("sub-menu"),$(".menu-item-has-children ul").removeClass("menu"),$("ul.sub-menu li").addClass("menu-item menu-item-type-taxonomy menu-item-object-category")}),$(document).ready(function(){$("ul.sub-menu").parent("li").addClass("menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"),$(".nav-menu ul li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})})}),$(".slider").each(function(){var t=$(this),e=t.attr("data-option"),i=t.attr("data-no"),l=($(this).parent().prev("h3"),t.attr("data-no")),r=(t.attr("data-slide"),t.attr("data-type")),n=Math.floor(Math.random()*i+1);if(e.match("recent"))var o="/feeds/posts/default?alt=json-in-script&max-results="+i;else o=e.match("random")?"/feeds/posts/default?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+i:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+i;$.ajax({type:"GET",url:o,dataType:"jsonp",success:function(t){for(var i="",n="",o=0;o<t.feed.entry.length;o++){for(var h=t.feed.entry[o],f=h.title.$t,m=0;m<h.link.length;m++)if("replies"==h.link[m].rel&&"text/html"==h.link[m].type&&(h.link[m].title,h.link[m].href),"alternate"==h.link[m].rel){var p=h.link[m].href;break}var u,v=h.content.$t,g=(t.feed.entry[o].author[0].name.$t,t.feed.entry[o].author[0].gd$image.src,t.feed.entry[o].published.$t),y=(g.substring(0,4),g.substring(5,7)),x=(g.substring(8,10),months[parseInt(y,10)],$("<p>").html(v).text().substring(0,65),"");try{u=h.media$thumbnail.url.replace("default","hqdefault").replace("s72-c","s480")}catch(t){s=h.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_image}try{x=h.category[0].term,tgg=x.slice(0,1)}catch(i){x="",tgg=""}n+='<article class="article-list-item">',n+='<div class="article-list-img"><a href="'+p+'" title="'+f+'"><img alt="'+f+'" src="'+u+'"></img></a></div>',n+='<div class="article-list-desc">',n+='<div class="article-list-pretitle"><a class="article-list-category" href="/search/label/'+x+'" title="'+x+'">'+x+"</a></div>",n+='<a href="'+p+'" title="'+f+'" class="article-list-title">'+f+"</a>",n+="</div>",n+="</article>"}i+=n+="",$(".slider").each(function(){$(this).attr("data-option")==e&&$(this).attr("data-type")==r&&$(this).attr("data-no")==l&&$(this).parent().html(i)}),0===$(".post-meta .post-author").length&&$(".lk_user").remove(),0===$(".post-meta .post-time").length&&$(".lk_date").remove()}})}),$(".default").each(function(){var t=$(this),e=t.attr("data-option"),i=t.attr("data-no"),l=t.attr("data-no"),r=($(this).parent().prev("h3"),t.attr("data-type")),n=(t.parent().parent(),Math.floor(Math.random()*i+1));if(e.match("recent"))var o="/feeds/posts/default?alt=json-in-script&max-results="+i;else o=e.match("random")?"/feeds/posts/default?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+i:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+i;$.ajax({type:"GET",url:o,dataType:"jsonp",beforeSend:function(){t.append('<div class="load_in"><i class="fa fa-spinner fa-spin"></i></div>')},success:function(t){for(var i="",n="",o="",h=0;h<t.feed.entry.length;h++){for(var f=t.feed.entry[h],m=f.title.$t,p=0;p<f.link.length;p++)if("replies"==f.link[p].rel&&"text/html"==f.link[p].type&&(f.link[p].title,f.link[p].href),"alternate"==f.link[p].rel){var u=f.link[p].href;break}var v,g=f.content.$t,y=t.feed.entry[h].author[0].name.$t,x=(t.feed.entry[h].author[0].gd$image.src,t.feed.entry[h].published.$t),k=x.substring(0,4),j=x.substring(5,7),w=x.substring(8,10)+" "+months[parseInt(j,10)]+" "+k,_=($("<p>").html(g).text().substring(0,190),"");try{v=f.media$thumbnail.url.replace("default","hqdefault").replace("s72-c","s480")}catch(t){s=f.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),v=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_image}try{_=f.category[0].term,tgg=_.slice(0,1)}catch(i){_="",tgg=""}0==h?(n+="<h3>"+e+'</h3><div class="list-category-main">',n+='<article class="article-list-item">',n+='<div class="article-list-img"><a href="'+u+'" title="'+m+'"><img alt="'+m+'" src="'+v+'"></img></a></div>',n+='<div class="article-list-desc">',n+='<div class="article-list-pretitle"><a class="article-list-category" href="/search/label/'+_+'" title="'+_+'">'+_+"</a></div>",n+='<a href="'+u+'" title="'+m+'" class="article-list-title">'+m+"</a>",n+='<div class="article-list-meta"><span class="article-list-author"><a alt="'+y+'" href="#" rel="noopener noreferrer" target="_blank">'+y+' </a></span><span class="article-list-date">'+w+"</span></div>",n+="</div>",n+="</article>",n+='</div><div class="list-category-sub">'):(o+='<article class="article-list-item">',o+='<div class="article-list-img"><a href="'+u+'" title="'+m+'"><img alt="'+m+'" src="'+v+'"></img></a></div>',o+='<div class="article-list-desc">',o+='<div class="article-list-pretitle"><a class="article-list-category" href="/search/label/'+_+'" title="'+_+'">'+_+"</a></div>",o+='<a href="'+u+'" title="'+m+'" class="article-list-title">'+m+"</a>",o+='<div class="article-list-meta"><span class="article-list-author"><a alt="'+y+'" href="#" rel="noopener noreferrer" target="_blank">'+y+' </a></span><span class="article-list-date">'+w+"</span></div>",o+="</div>",o+="</article>")}i+=n+=o+='</div><div class="more left"><a href="/search/label/'+e+'" title="More '+e+'">More '+e+"</a></div>",$(".default").each(function(){$(this).attr("data-option")==e&&$(this).attr("data-type")==r&&$(this).attr("data-no")==l&&$(this).parent().html(i)}),0===$(".post-meta .post-author").length&&$(".lk_user").remove(),0===$(".post-meta .post-time").length&&$(".lk_date").remove()}})}),$(".video").each(function(){var t=$(this),e=t.attr("data-option"),i=t.attr("data-no"),l=t.attr("data-no"),r=($(this).parent().prev("h3"),t.attr("data-type")),n=(t.parent().parent(),Math.floor(Math.random()*i+1));if(e.match("recent"))var o="/feeds/posts/default?alt=json-in-script&max-results="+i;else o=e.match("random")?"/feeds/posts/default?alt=json-in-script&orderby=updated&start-index="+n+"&max-results="+i:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+i;$.ajax({type:"GET",url:o,dataType:"jsonp",beforeSend:function(){t.append('<div class="load_in"><i class="fa fa-spinner fa-spin"></i></div>')},success:function(t){for(var i="",n="",o="",h=0;h<t.feed.entry.length;h++){for(var f=t.feed.entry[h],m=f.title.$t,p=0;p<f.link.length;p++)if("replies"==f.link[p].rel&&"text/html"==f.link[p].type&&(f.link[p].title,f.link[p].href),"alternate"==f.link[p].rel){var u=f.link[p].href;break}var v,g=f.content.$t,y=(t.feed.entry[h].author[0].name.$t,t.feed.entry[h].author[0].gd$image.src,t.feed.entry[h].published.$t),x=(y.substring(0,4),y.substring(5,7)),k=(y.substring(8,10),months[parseInt(x,10)],$("<p>").html(g).text().substring(0,190),"");try{v=f.media$thumbnail.url.replace("default","hqdefault").replace("s72-c","s480")}catch(t){s=f.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),v=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_image}try{k=f.category[0].term,tgg=k.slice(0,1)}catch(i){k="",tgg=""}0==h?(n+="<h3>"+e+'</h3><div class="list-video-main">',n+='<article class="article-list-item">',n+='<div class="article-list-img"><a href="'+u+'" title="'+m+'"><img alt="'+m+'" src="'+v+'"></img></a></div>',n+='<div class="article-list-desc">',n+='<div class="article-list-pretitle"><a class="article-list-category" href="/search/label/'+k+'" title="'+k+'">'+k+"</a></div>",n+='<a href="'+u+'" title="'+m+'" class="article-list-title">'+m+"</a>",n+='<div class="more left"><a href="'+u+'" title="Watch Now">Watch Now</a></div>',n+="</div>",n+="</article>",n+='</div><div class="list-video-sub">'):(o+='<article class="article-list-item">',o+='<div class="article-list-img"><a href="'+u+'" title="'+m+'"><img alt="'+m+'" src="'+v+'"></img></a></div>',o+='<div class="article-list-desc">',o+='<div class="article-list-pretitle"><a class="article-list-category" href="/search/label/'+k+'" title="'+k+'">'+k+"</a></div>",o+='<a href="'+u+'" title="'+m+'" class="article-list-title">'+m+"</a>",o+="</div>",o+="</article>")}i+=n+=o+='</div><div class="more right"><a href="/search/label/'+e+'" title="Watch More">Watch More</a></div>',$(".video").each(function(){$(this).attr("data-option")==e&&$(this).attr("data-type")==r&&$(this).attr("data-no")==l&&$(this).parent().html(i)}),0===$(".post-meta .post-author").length&&$(".lk_user").remove(),0===$(".post-meta .post-time").length&&$(".lk_date").remove()}})}),$("#related-posts").each(function(){var t=$(this).html();$.ajax({url:"/feeds/posts/default/-/"+t+"?alt=json-in-script&max-results="+related_number,type:"get",dataType:"jsonp",success:function(t){for(var e="",a='<div class="article-list-wrapper">',s=0;s<t.feed.entry.length;s++){for(var l=0;l<t.feed.entry[s].link.length;l++)if("alternate"==t.feed.entry[s].link[l].rel){e=t.feed.entry[s].link[l].href;break}var r=t.feed.entry[s].title.$t,n=t.feed.entry[s].category[0].term,m=t.feed.entry[s].author[0].name.$t;if(n.slice(0,1),i=t.feed.entry[s].published.$t,c=i.substring(0,4),d=i.substring(5,7),o=i.substring(8,10),f=months[parseInt(d,10)]+" "+o+", "+c,u=t.feed.entry[s].content.$t,h=$("<div>").html(u),u.indexOf("http://www.youtube.com/embed/")>-1||u.indexOf("https://www.youtube.com/embed/")>-1)var p='<a class="related-img" href="'+e+'" style="background:url('+t.feed.entry[s].media$thumbnail.url+') no-repeat center center;background-size: cover"/>';else p=u.indexOf("<img")>-1?'<a href="'+e+'"><img width="83" height="55" src="'+h.find("img:first").attr("src")+'" alt="'+r+'" class="attachment-90x55 size-90x55 wp-post-image" loading="lazy" srcset="'+h.find("img:first").attr("src")+'" sizes="(max-width: 83px) 100vw, 83px"></img></a>':'<a href="'+e+'"><img width="83" height="55" src="'+no_image+'" alt="'+r+'" class="attachment-90x55 size-90x55 wp-post-image" loading="lazy" srcset="'+no_image+'" sizes="(max-width: 83px) 100vw, 83px"></img></a>';a+='<article class="article-list-item"><div class="article-list-img">'+p+'</div><div class="article-list-desc"><div class="article-list-pretitle"><a class="article-list-category" title="'+n+'">'+n+'</a></div><a class="article-list-title" title="'+r+'" href="'+e+'">'+r+'</a><div class="article-list-meta"><span class="article-list-author"><a title="'+m+'" rel="author">'+m+"</a></span></div></div></article>"}a+="</div>",$("#related-posts").html(a),$("#related-posts").before("<h2>"+related_title+"</h2>")}})}),$("#blog-repeat").on("click",function(t){t.preventDefault();var e=$(".blog-pager-older-link"),a=e.attr("href");if(e.data("clicked"))return!1;e.data("clicked",!0),$(".blog-pager-older-link").html(loading_txt),$.get(a,function(t){var a=$(t).find(".list-archive-main").length?$(t):$("<div></div>");$(".list-archive-main").append(a.find(".list-archive-main").html());var i=a.find("#Blog1_blog-pager-older-link").clone();void 0===i.html()?($("#blog-pager-older-link").html(nomore_txt),finish=1):$("#blog-repeat").html(i),e.data("clicked",!1)},"html")});

function JisTech(){}function Article(){this.el=document.importNode(document.getElementById("category-article-list-item").content,!0)}JisTech.init=function(){JisTech.megaMenu()},JisTech.getOffset=function(e){let t=0,l=0,n=e.offsetWidth,o=e.offsetHeight;for(;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop)&&(t+=e.offsetLeft-e.scrollLeft,l+=e.offsetTop-e.scrollTop,"relative"!==(e=e.offsetParent).style.position););return{top:l,left:t,width:n,height:o}},JisTech.serializeObject=function(e){var t=[];for(var l in e)e.hasOwnProperty(l)&&t.push(encodeURIComponent(l)+"="+encodeURIComponent(e[l]));return t.join("&")},JisTech.megaMenu=function(){let e=document.querySelectorAll(".menu-open"),t=document.getElementById("menu-close"),l=document.getElementById("top-ad"),n=document.getElementById("mega-menu");e.forEach(function(e){e.addEventListener("click",function(){n.style.display="block",l.style.display="none",document.body.classList.add("menu-open-effect")})}),t.addEventListener("click",function(){n.style.display="none",l.style.display="block",document.body.classList.remove("menu-open-effect")})},JisTech.ads={},JisTech.register_ad=function(e){JisTech.ads[e]||(googletag.cmd.push(function(){let t=googletag.sizeMapping().addSize([970,0],[[728,90]]).addSize([300,0],[[300,250],[320,50]]).addSize([0,0],[[1,1]]).build();console.log(e),googletag.defineSlot("/24669334/TC_728x90_Homepage_Desktop",[[728,90],[300,250],[320,50]],e).defineSizeMapping(t).addService(googletag.pubads())}),googletag.cmd.push(function(){googletag.pubads().enableSingleRequest(),googletag.enableServices()}),JisTech.ads[e]=1)},JisTech.display_ads=function(){for(let e in JisTech.ads)googletag.display(e)},JisTech.loadMore=function(e){let t=document.getElementById("more-content");if(!t)return;let l="";l=t.hasAttribute("data-list-class")?t.getAttribute("data-list-class"):document.querySelector("main .article-listing").getAttribute("class");let n={offset:0,count:6},o=null;if(o=t.getAttribute("data-args")){o=JSON.parse(o);for(let e in o)n[e]=o[e]}t.hasAttribute("data-offset")&&(n.offset=parseInt(t.getAttribute("data-offset"))),t.setAttribute("data-offset",n.offset+n.count);return Article.getArticleList(n,function(n){if(n.length<6&&(document.getElementById("load-more").style.display="none"),0===n.length)return;let o=document.createElement("DIV");o.setAttribute("class",l);for(let e=0,t=6;e<t;e++)e<n.length&&o.appendChild(n[e].el);if(t.appendChild(o),!(n.length<4)){(o=document.createElement("DIV")).setAttribute("class",l);for(let e=6,t=12;e<t;e++)e<n.length&&o.appendChild(n[e].el);t.appendChild(o),e()}}),!1},Article.getArticleList=function(e,t){let l=new URL(document.location.href);l.pathname="/wp-json/wp/v2/posts";let n=new URLSearchParams;e.post_type&&(l.pathname="/wp-json/wp/v2/"+e.post_type),e.offset&&(n.set("offset",e.offset),delete e.offset),e.count&&(n.set("per_page",e.count),delete e.count),e.cat&&n.set("categories",e.cat),e.tag&&n.set("tags",e.tag),e.author&&n.set("author",e.author),l.search="";let o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){let e=[],l=JSON.parse(o.responseText);for(let t=0,n=l.length;t<n;t++){let n=l[t];console.log(n);let o=new Article;o.setTitle(n.title.rendered,n.link),o.setImage(n.thumbnail,n.link,!0),o.setCategory(n.category_title,n.category_url),o.setLink(n.link),o.setAuthor(n.author_link),o.setDate(n.date_string),e.push(o)}t(e)}},o.open("GET",l.toString()+"?"+n.toString()),o.send()},Article.prototype.setTitle=function(e,t){this.el.querySelector(".article-list-title").innerHTML=e,this.el.querySelector(".article-list-title").setAttribute("href",t)},Article.prototype.setAuthor=function(e){this.el.querySelector(".article-list-author").innerHTML=e;let t=this.el.querySelector(".article-list-author a").innerHTML;t=t.split(" ")[0],this.el.querySelector(".article-list-author a").textContent=t},Article.prototype.setDate=function(e){this.el.querySelector(".article-list-date").textContent=e},Article.prototype.setCategory=function(e,t){this.el.querySelector(".article-list-category").innerHTML=e,this.el.querySelector(".article-list-category").setAttribute("href",t)},Article.prototype.setImage=function(e,t,l=!1){let n=this.el.querySelector(".article-list-img");if(l){let l=document.createElement("A");l.setAttribute("href",t),l.innerHTML=e,n.appendChild(l)}else{let l=document.createElement("IMG");l.setAttribute("src",e),l.setAttribute("class","attachment-post-thumbnail size-post-thumbnail wp-post-image");let o=document.createElement("A");o.setAttribute("href",t),o.appendChild(l),n.appendChild(o)}},Article.prototype.setLink=function(e){this.el.querySelector("article").setAttribute("data-href",e)},document.addEventListener("DOMContentLoaded",function(){JisTech.init(),document.querySelectorAll(".tc-accordion-block").forEach(function(e){e.querySelector("h3").addEventListener("click",function(t){e.classList.contains("open")?e.classList.remove("open"):e.classList.add("open")})});let e=document.getElementById("event_type"),t=document.getElementById("event_year");(e||t)&&(e.addEventListener("change",function(){let t=window.location.href;t.includes("list-events-search")||(t+="#list-events-search");let l=(t=new URL(t)).searchParams;e.value?l.set("event_type",e.value):l.delete("event_type"),t.search=l.toString(),window.location.href=t.toString()}),t.addEventListener("change",function(){let e=window.location.href;e.includes("list-events-search")||(e+="#list-events-search");let l=(e=new URL(e)).searchParams;t.value?l.set("event_year",t.value):l.delete("event_year"),e.search=l.toString(),window.location.href=e.toString()}));let l=function(e,t){t.scrollLeft+t.clientWidth>=t.scrollWidth?e.classList.add("scroll-end"):e.classList.remove("scroll-end"),0===t.scrollLeft?e.classList.add("scroll-start"):e.classList.remove("scroll-start")};document.querySelectorAll(".list-overflow-section").forEach(function(e){let t=e.querySelector(".list-overflow-wrapper");if(t.addEventListener("scroll",function(n){0!==Math.abs(t.scrollLeft-t.getAttribute("data-scroll-left"))&&t.classList.remove("auto-scroll"),l(e,this)}),e.addEventListener("click",function(l){if(e.removeAttribute("data-auto-scroll"),l.offsetX>l.target.clientWidth){let e=t.scrollLeft+t.clientWidth+25;t.classList.contains("list-overflow-report")&&(e=t.scrollLeft+t.clientWidth+100),t.scrollLeft=Math.min(e,t.scrollWidth-t.clientWidth)}if(l.offsetX<0){let e=t.scrollLeft-t.clientWidth-25;t.classList.contains("list-overflow-report")&&(e=t.scrollLeft-t.clientWidth-100),e<0&&(e=0),t.scrollLeft=e}}),t.classList.contains("auto-scroll")){t.style.position="relative",t.setAttribute("data-auto-next","1"),t.setAttribute("data-scroll-left",t.scrollLeft);let e=t.querySelectorAll(".overflow-item"),l=function(){if(t.classList.contains("auto-scroll")){let n=parseInt(t.getAttribute("data-auto-next")),o=JisTech.getOffset(e[n]),i=!1;if(o.left>=t.scrollLeft){let e=t.scrollLeft;t.scrollLeft+=10,(t.scrollLeft>=o.left||e===t.scrollLeft)&&(t.scrollLeft=o.left,i=!0),t.setAttribute("data-scroll-left",t.scrollLeft)}else t.scrollLeft-=50,t.scrollLeft<=o.left&&(t.scrollLeft=o.left,i=!0),t.setAttribute("data-scroll-left",t.scrollLeft);i?(n+1>=e.length?n=0:n++,t.setAttribute("data-auto-next",n),setTimeout(l,2500)):setTimeout(l,25)}};setTimeout(l,2500)}l(e,t)});let n=document.getElementById("single-article");if(n){let e=document.getElementById("single-article-sidebar");single_article_height=n.offsetHeight,single_article_height>e.offsetHeight&&(e.style.height=single_article_height+"px")}let o=document.getElementById("wpadminbar"),i=document.getElementById("header");o&&i.classList.add("admin-bar-space");let s=document.getElementById("load-more");s&&s.addEventListener("click",function(e){return JisTech.loadMore(),e.preventDefault(),e.stopPropagation(),!1})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".list-newsletter-signup").forEach(function(e){let t=document.querySelectorAll(".checkbox-input-elem");e.addEventListener("click",function(){let l=e.dataset.list,n=document.querySelector("input[name="+l+"]");t.forEach(function(e){e.getAttribute("name")==n.getAttribute("name")?n.checked=!0:e.checked=!1})})}),document.querySelectorAll(".newsletter-subscribe").forEach(function(e){let t=function(t){let l=e.querySelector("#email").value,n=e.querySelector("#fname").value,o=e.querySelectorAll(".checkbox-input-elem");if(0==l.length)return alert("Email field cannot be empty"),!1;if(void 0===(o=[].filter.call(o,function(e){return e.checked}))||0==o.length)return alert("You need to select a newsletter type :)"),!1;let i={email:l,fname:n,list:o=o.map(function(e){return e.value})};l&&(i.email=l);let s=e.querySelector("button");e.classList.add("collapsed"),s.innerHTML="Processing...";let r=new XMLHttpRequest;try{r.open("POST","/subscribe",!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status)e.classList.add("subscribed"),s.innerHTML="You're in!";else{let t=JSON.parse(r.responseText);if("100"===(t=t.details[0]).Code)e.classList.add("subscribed"),s.innerHTML="You're in!";else{let l=e.querySelector("input");l.classList.add("error"),l.focus(),s.innerHTML="failed: "+t.Message,setTimeout(function(){e.classList.add("invalid"),e.querySelector("input").focus(),s.innerHTML="Subscribe"},1e3)}}};let t=new URL(document.location.href);t.pathname="/subscribe",t.search="",r.send(JisTech.serializeObject(i))}catch(e){}return void 0!==t&&t.preventDefault(),!1};e.querySelector("button").addEventListener("click",function(){t()}),e.addEventListener("submit",t)})});
