$(function(){
    const icon=$("#icon");
    const sidebar=$(".sidebar");
    const close=$("#close");
    
    
    icon.click(function(){
    
        sidebar.addClass("see");
    });
    
    close.click(function(){
        sidebar.removeClass("see");
    });
    
    });
