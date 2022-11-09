$(document).ready(function(){

    const resetAccordion = () =>{
        $('#question-container').children().children('.question').each(function(){
            $(this).css('display','block');
        })
        $('#question-container').children().children('.question').each(function(){
            $(this).children('p').unmark();
        })
        //$('#question-container').unmark();
    }

$('#search-key').keyup(function(){
    resetAccordion();
    let searchValue = $(this).val().trim();
    if(searchValue.length){
        markArray = searchValue.split(' ');
        //$('#question-container').mark(markArray);
        $('#question-container').children().children('.question').each(function(){
            searchHaystack = '';
            searchHaystack += $(this).children('p').text().trim()+' ';

            $(this).children('p').mark(markArray);

            if(!searchDeep(searchValue,searchHaystack)){
                $(this).css('display','none');
            }else{
                console.log('yes')
            }
            
        })
    }else{
        resetAccordion();
        
    }
})




})