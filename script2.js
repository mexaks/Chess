ChessBoardRows=Array('a','b','c','d','e','f','g','h')

let isGameStarted = false;

CreateChessBoard = () => {
    for (i=1;i<9;i++){
        $('.chess_board').append($('<div>',{
            class:'ChessBoardRow '+ChessBoardRows[i-1]
        }))
        for(k=1;k<9;k++){
            if((i%2==0 && k%2==0) || (i%2!==0 && k%2!==0)){
                ColorCell='bg-yellow-900'
            } else ColorCell='bg-yellow-300';
            $('.'+ChessBoardRows[i-1]).append($('<div>',{
                class:'ChessBoardCell '+k+' '+ColorCell
            }))
        }
    }
    
}

FillChessBoard = () => {
    //pawns
    $('.ChessBoardCell.2').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white pawn',
        src:'img/pawnWhite.png'
    }))
    
    $('.ChessBoardCell.7').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black pawn',
        src:'img/pawnBlack.png'
    }))
    //rooks     
    $('.ChessBoardRow.a').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white rook',
        src:'img/rookWhite.png'
    }))
    
    $('.ChessBoardRow.a').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black rook',
        src:'img/rookBlack.png'
    }))
    $('.ChessBoardRow.h').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white rook',
        src:'img/rookWhite.png'
    }))
    
     $('.ChessBoardRow.h').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black rook',
        src:'img/rookBlack.png'
    }))
    
    //knights
    $('.ChessBoardRow.b').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black knight',
        src:'img/knightBlack.png'
    }))
    
     $('.ChessBoardRow.g').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black knight',
        src:'img/knightBlack.png'
    }))
    
    $('.ChessBoardRow.g').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white knight',
        src:'img/knightWhite.png'
    }))
    
     $('.ChessBoardRow.b').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white knight',
        src:'img/knightWhite.png'
}))
    
//bishops
    
    $('.ChessBoardRow.c').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white bishop',
        src:'img/bishopWhite.png'
    }))
    
    $('.ChessBoardRow.f').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white bishop',
        src:'img/bishopWhite.png'
    }))
    
    $('.ChessBoardRow.c').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black bishop',
        src:'img/bishopBlack.png'
    })) 
    
   $('.ChessBoardRow.f').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black bishop',
        src:'img/bishopBlack.png'
    }))     
    
    //kings
    $('.ChessBoardRow.e').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black king',
        src:'img/kingBlack.png'
    }))  
    
    $('.ChessBoardRow.e').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white king',
        src:'img/kingWhite.png'
    }))  

    //queens
    
    $('.ChessBoardRow.d').children('.1').append($('<img>',{
        class:'ChessBoardCell__ChessPiece white queen',
        src:'img/queenWhite.png'
    })) 
     $('.ChessBoardRow.d').children('.8').append($('<img>',{
        class:'ChessBoardCell__ChessPiece black queen',
        src:'img/queenBlack.png'
    }))
}

CreateChessBoard();
FillChessBoard();


AddClassAvailable = (row,num,side,eat=false) => {
if($('.ChessBoardRow.'+row).children('.'+num).children().hasClass('ChessBoardCell__ChessPiece')){
    if(!eat || $('.ChessBoardRow.'+row).children('.'+num).children().hasClass(side)){
            return 0;
        }
    }
$('.ChessBoardRow.'+row).children('.'+num).addClass('available');
}


$(document).on('click','.available',function(){
    if(!isGameStarted) isGameStarted = true; 
    if(($(this).hasClass('8') || $(this).hasClass('1')) && $('.active').children().hasClass('pawn') ){ 
        $(this).addClass('changing');
        $('.wrapper').append($('<form>',{ class:'ChoisePiece'}));
        $('.wrapper').addClass('pointer-events-none'); 
        $('.ChoisePiece').addClass('pointer-events-auto'); 
                         
        $('.ChoisePiece').append($('<div>',{
            text:'X',
            class:'CloseWindow ChoisePiece__CloseBtn'    
        }));                                                         
        $('.ChoisePiece').append($('<h7>',{
            class:'ChoisePiece__header block',
            text:'Select a chess piece'
        }))     
            
        $('.ChoisePiece').append($('<select>',{
            class:'ChoisePiece__select'
        }))  
        
        $('.ChoisePiece').append($('<button>',{
            class:'ChoisePiece__btnSubmit mx-auto',
            text:'Change piece',
            type:'submit'
        }))     
        Pieces=Array('king','queen','bishop','knight','rook');
        Pieces.forEach(function(item){
            $('.ChoisePiece__select').append($('<option>',{
            value:item,
            text:item
            }))           
        })    
    }
    if($(this).children().hasClass('king')){
        $('.wrapper').append($('<div>',{
            class:'infoVictory',
            text:side+' is won'
        }));
        $('.infoVictory').append($('<div>',{
            text:'X',
            class:'CloseWindow infoVictory__CloseBtn'    
        }))
        $('.wrapper').toggleClass('pointer-events-none');
        $('.infoWrongSide').toggleClass('pointer-events-auto');   $('body').addClass('close'); 
        return 0;
    }
    if($(this).children()) $(this).empty();
    $(this).append($('.active').children());
    $('.available').removeClass('available');
    $('.active').removeClass('active');
    ChangeSide();
})

$(document).on('submit','.ChoisePiece',function(e){
    e.preventDefault();
    $('.changing').children().removeClass('pawn');
    $('.changing').children().addClass($('.ChoisePiece__select').val());
        
    switch($('.changing').children().attr('class').split(' ')[1]){
        case 'white':
            switch($('.ChoisePiece__select').val()){
                case 'king':
                    img='img/kingWhite.png'; break;
                case 'queen': 
                    img='img/queenWhite.png'; break;
                case 'bishop':
                    img='img/bishopWhite.png'; break;
                case 'knight':
                    img='img/knightWhite.png';break;
                case 'rook':
                    img='img/rookWhite.png';break;
            } break;
        case 'black':
            switch($('.ChoisePiece__select').val()){
                case 'king':
                    img='img/kingBlack.png'; break;
                case 'queen': 
                    img='img/queenBlack.png'; break;
                case 'bishop':
                    img='img/bishopBlack.png'; break;
                case 'knight':
                    img='img/kingBlack.png';break;
                case 'rook':
                    img='img/rookBlack.png';break;
                } break;
        }

    $('.changing').children().attr('src',img);    
    $('.ChoisePiece').remove();    
    $('.wrapper').removeClass('pointer-events-none');
    $('.changing').removeClass('changing')    
})

$(document).on('click',".ChessBoardCell:not(.available)",function(){  
    if(!$(this).children().hasClass('ChessBoardCell__ChessPiece')) return
    if($('.chess_info__turnSide').hasClass('bg-white')){
        side='white';
    } else side='black';
    $('.ChessBoardCell.active').removeClass('active');
    $('.ChessBoardCell.available').removeClass('available');    
    if($(this).children('.ChessBoardCell__ChessPiece').hasClass(side)){        
        $(this).addClass('active');
        row_index=$.inArray($(this).parent().attr('class').split(' ')[1],ChessBoardRows);    
        num=Number($(this).attr('class').split(' ')[1]);    
        if(side=='white'){
            offset=Number(1)
        } else offset=Number(-1);                 
        switch($(this).children().attr('class').split(' ')[2]){
            case 'pawn':
                if(($('.ChessBoardCell.active').hasClass('2') && side=='white') || ($('.ChessBoardCell.active').hasClass('7') && side=='black')){ 
                    if(!$('.ChessBoardRow.'+ChessBoardRows[row_index]).children('.'+ (num+offset)).children().hasClass('ChessBoardCell__ChessPiece')){
                        AddClassAvailable(ChessBoardRows[row_index],num+2*offset,side) 
                    }
                }
                AddClassAvailable(ChessBoardRows[row_index],num+offset,side);         
                if($('.ChessBoardRow.'+ChessBoardRows[row_index+1]).children('.'+ (num+offset)).children().hasClass('ChessBoardCell__ChessPiece')){
                    AddClassAvailable(ChessBoardRows[row_index+1],num+offset,side,true)
                }   
                
                if($('.ChessBoardRow.'+ChessBoardRows[row_index-1]).children('.'+ (num+offset)).children().hasClass('ChessBoardCell__ChessPiece')){
                    AddClassAvailable(ChessBoardRows[row_index-1],num+offset,side,true)
                } 
                break;
            case 'queen':
            case 'rook':
                $(this).prevUntil('.ChessBoardCell:has(.ChessBoardCell__ChessPiece)').addClass('available'); 
                if(!$(this).prevAll(':has(.ChessBoardCell__ChessPiece)').first().children().hasClass(side)){
                    $(this).prevAll(':has(.ChessBoardCell__ChessPiece)').first().addClass('available');     
                }            
               
                $(this).nextUntil(':has(.ChessBoardCell__ChessPiece)').addClass('available');
                if(!$(this).nextAll(':has(.ChessBoardCell__ChessPiece)').first().children().hasClass(side)){
                    $(this).nextAll(':has(.ChessBoardCell__ChessPiece)').first().addClass('available');     
                }        
                k=1;   
                while(typeof ChessBoardRows[row_index+k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index+k],num,side,true);     
                    if($('.'+ChessBoardRows[row_index+k]+'>.'+num).children().hasClass('ChessBoardCell__ChessPiece')) break
                    k++;
                }  
                k=1;     
                while(typeof ChessBoardRows[row_index-k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index-k],num,side,true);   
                    if($('.'+ChessBoardRows[row_index-k]+'>.'+num).children().hasClass('ChessBoardCell__ChessPiece')) break
                    k++; 
                }        
                if($(this).children().attr('class').split(' ')[2]=='rook')  break;
                
            case 'queen':
            case 'bishop':
                k=1;
                while(typeof ChessBoardRows[row_index+k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index+k],num+k*offset,side,true);   
                    if($('.'+ChessBoardRows[row_index+k]+'>.'+(num+k*offset)).children().hasClass('ChessBoardCell__ChessPiece')) break
                    k++;
                }  
                k=1;
                
                while(typeof ChessBoardRows[row_index+k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index+k],num-k*offset,side,true);     
                    if($('.'+ChessBoardRows[row_index+k]+'>.'+(num-k*offset)).children().hasClass('ChessBoardCell__ChessPiece')) break 
                    k++;
                } 
                k=1;
                
                while(typeof ChessBoardRows[row_index-k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index-k],num-k*offset,side,true);     
                    if($('.'+ChessBoardRows[row_index-k]+'>.'+(num-k*offset)).children().hasClass('ChessBoardCell__ChessPiece')) break 
                    k++;
                } 
                k=1;
                
                while(typeof ChessBoardRows[row_index-k]!='undefined'){
                    AddClassAvailable(ChessBoardRows[row_index-k],num+k*offset,side,true);    
                    if($('.'+ChessBoardRows[row_index-k]+'>.'+(num+k*offset)).children().hasClass('ChessBoardCell__ChessPiece')) break 
                    k++;
                } 
                
                break;
                        
                
            case 'knight':
                AddClassAvailable(ChessBoardRows[row_index+1],num+offset*2,side,true);
                AddClassAvailable(ChessBoardRows[row_index-1],num+offset*2,side,true);
                AddClassAvailable(ChessBoardRows[row_index+2],num+offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index-2],num+offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index+2],num-offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index-2],num-offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index+1],num-offset*2,side,true);
                AddClassAvailable(ChessBoardRows[row_index-1],num-offset*2,side,true);            
                break;    
            
            case 'king':
                AddClassAvailable(ChessBoardRows[row_index-1],num+offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index],num+offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index+1],num+offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index+1],num,side,true);
                AddClassAvailable(ChessBoardRows[row_index+1],num-offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index],num-offset,side,true);
                AddClassAvailable(ChessBoardRows[row_index-1],num-offset,side,true); 
                AddClassAvailable(ChessBoardRows[row_index-1],num,side,true);           
                break;
                
         
        }  
    }
            
    else {
        $(this).addClass('WrongSide');
        $('.wrapper').append($('<div>',{
            class:'infoWrongSide',
            text:'now turn is '+side
        }));
        $('.infoWrongSide').append($('<div>',{
            text:'X',
            class:'CloseWindow infoWrongSide__CloseBtn'    
        }))
        $('.wrapper').toggleClass('pointer-events-none');
        $('.infoWrongSide').toggleClass('pointer-events-auto');   
        $('body').addClass('close'); 
        }
      
})


ChangeSide = () => {
    $('.chess_info__turnSide').toggleClass('bg-white');   
    $('.chess_info__turnSide').toggleClass('bg-black');
}


$('.chess_info__btnReset').click(() => {
    $('.ChessBoardCell').empty();
    $('.ChessBoardCell').removeClass('active available')
    isGameStarted = false;
    FillChessBoard();
})

$('.chess_info__turnSide').click(() => {
    if(isGameStarted || $('.ChessBoardCell.active').length > 0) return
    ChangeSide()
})

$(document).on('click','.CloseWindow',function(){
    $(this).parent().remove();
})

$(document).on('click','.infoWrongSide__CloseBtn,.close,.infoVictory__CloseBtn,.ChoisePiece__CloseBtn',function(){    
    $('.WrongSide.ChessBoardCell').removeClass('WrongSide');
    $('.wrapper').removeClass('pointer-events-none');
    $('body').removeClass('close');   
    $('.infoWrongSide').remove();    
})


