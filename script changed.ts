let ChessBoardRows: string[] = Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
let side: string;

const CreateChessBoard: Function = (): void => {
  let ColorCell: string;
  for (let i = 1; i < 9; i++) {
    $('.chess_board').append(
      $('<div>', {
        class: 'ChessBoardRow ' + ChessBoardRows[i - 1],
      })
    );
    for (let k = 1; k < 9; k++) {
      if ((i % 2 == 0 && k % 2 == 0) || (i % 2 !== 0 && k % 2 !== 0)) {
        ColorCell = 'bg-yellow-900';
      } else ColorCell = 'bg-yellow-300';
      $('.' + ChessBoardRows[i - 1]).append(
        $('<div>', {
          class: 'ChessBoardCell ' + k + ' ' + ColorCell,
        })
      );
    }
  }
};

const FillChessBoard: Function = (): void => {
  //pawns
  $('.ChessBoardCell.2').append(
    $('<img>', {
      class: 'ChessBoardCell__ChessPiece white pawn',
      src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/peshka-belaya.png',
    })
  );

  $('.ChessBoardCell.7').append(
    $('<img>', {
      class: 'ChessBoardCell__ChessPiece black pawn',
      src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/peshka-chernaya.png',
    })
  );
  //rooks
  $('.ChessBoardRow.a')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white rook',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-belaya.png',
      })
    );

  $('.ChessBoardRow.a')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black rook',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-chernaya.png',
      })
    );
  $('.ChessBoardRow.h')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white rook',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-belaya.png',
      })
    );

  $('.ChessBoardRow.h')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black rook',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-chernaya.png',
      })
    );

  //knights
  $('.ChessBoardRow.b')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black knight',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-chernyiy.png',
      })
    );

  $('.ChessBoardRow.g')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black knight',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-chernyiy.png',
      })
    );

  $('.ChessBoardRow.g')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white knight',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-belyiy.png',
      })
    );

  $('.ChessBoardRow.b')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white knight',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-belyiy.png',
      })
    );

  //bishops

  $('.ChessBoardRow.c')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white bishop',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-belyiy.png',
      })
    );

  $('.ChessBoardRow.f')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white bishop',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-belyiy.png',
      })
    );

  $('.ChessBoardRow.c')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black bishop',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-chernyiy.png',
      })
    );

  $('.ChessBoardRow.f')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black bishop',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-chernyiy.png',
      })
    );

  //kings
  $('.ChessBoardRow.e')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black king',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/korol-chernyiy.png',
      })
    );

  $('.ChessBoardRow.e')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white king',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/korol-belyiy.png',
      })
    );

  //queens

  $('.ChessBoardRow.d')
    .children('.1')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece white queen',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ferz-belyiy.png',
      })
    );
  $('.ChessBoardRow.d')
    .children('.8')
    .append(
      $('<img>', {
        class: 'ChessBoardCell__ChessPiece black queen',
        src: 'https://nachalo4ka.ru/wp-content/uploads/2014/09/ferz-chernyiy.png',
      })
    );
};

CreateChessBoard();
FillChessBoard();

const AddClassAvailable: Function = (
  row: string,
  num: number,
  eat: boolean = false
): void => {
  if (
    $('.ChessBoardRow.' + row)
      .children('.' + num)
      .children()
      .hasClass('ChessBoardCell__ChessPiece')
  ) {
    if (
      eat ||
      !$('.ChessBoardRow.' + row)
        .children('.' + num)
        .children()
        .hasClass(side)
    ) {
      $('.ChessBoardRow.' + row)
        .children('.' + num)
        .addClass('available');
    }
  }
};

$(document).on('click', '.available', (): void => {
  if (
    ($(this).hasClass('8') || $(this).hasClass('1')) &&
    $('.active').children().hasClass('pawn')
  ) {
    $(this).addClass('changing');
    $('.wrapper').append(
      $('<form>', {
        class: 'ChoisePiece',
      })
    );
    $('.wrapper').addClass('pointer-events-none');
    $('.ChoisePiece').addClass('pointer-events-auto');

    $('.ChoisePiece').append(
      $('<div>', {
        text: 'X',
        class: 'CloseWindow ChoisePiece__CloseBtn',
      })
    );
    $('.ChoisePiece').append(
      $('<h7>', {
        class: 'ChoisePiece__header block',
        text: 'Select a chess piece',
      })
    );

    $('.ChoisePiece').append(
      $('<select>', {
        class: 'ChoisePiece__select',
      })
    );

    $('.ChoisePiece').append(
      $('<button>', {
        class: 'ChoisePiece__btnSubmit mx-auto',
        text: 'Change piece',
        type: 'submit',
      })
    );
    let Pieces: string[] = Array('king', 'queen', 'bishop', 'knight', 'rook');
    Pieces.forEach((item) => {
      $('.ChoisePiece__select').append(
        $('<option>', {
          value: item,
          text: item,
        })
      );
    });
  }
  if ($(this).children().hasClass('king')) {
    $('.wrapper').append(
      $('<div>', {
        class: 'infoVictory',
        text: side + ' is won',
      })
    );
    $('.infoVictory').append(
      $('<div>', {
        text: 'X',
        class: 'CloseWindow infoVictory__CloseBtn',
      })
    );
    $('.wrapper').toggleClass('pointer-events-none');
    $('.infoWrongSide').toggleClass('pointer-events-auto');
    $('body').addClass('close');
    return;
  }
  if ($(this).children()) $(this).empty();
  $(this).append($('.active').children());
  $('.available').removeClass('available');
  $('.active').removeClass('active');
  ChangeSide();
});

$(document).on('submit', '.ChoisePiece', (e): void => {
  e.preventDefault();
  $('.changing').children().removeClass('pawn');
  $('.changing')
    .children()
    .addClass(String($('.ChoisePiece__select').val()));
  let img: string;

  switch ($('.changing').children().attr('class').split(' ')[1]) {
    case 'white':
      switch ($('.ChoisePiece__select').val()) {
        case 'king':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/korol-belyiy.png';
          break;
        case 'queen':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/ferz-belyiy.png';
          break;
        case 'bishop':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-belyiy.png';
          break;
        case 'knight':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-belyiy.png';
          break;
        case 'rook':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-belaya.png';
          break;
      }
      break;
    case 'black':
      switch ($('.ChoisePiece__select').val()) {
        case 'king':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/korol-chernyiy.png';
          break;
        case 'queen':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/ferz-chernyiy.png';
          break;
        case 'bishop':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/slon-chernyiy.png';
          break;
        case 'knight':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/kon-chernyiy.png';
          break;
        case 'rook':
          img =
            'https://nachalo4ka.ru/wp-content/uploads/2014/09/ladya-chernyiy.png';
          break;
      }
      break;
  }

  $('.changing').children().attr('src', img);
  $('.ChoisePiece').remove();
  $('.wrapper').removeClass('pointer-events-none');
  $('.changing').removeClass('changing');
});

$(document).on('click', '.ChessBoardCell:not(.available)', (): void => {
  if ($(this).children().hasClass('ChessBoardCell__ChessPiece')) {
    let row_index: number;
    let num: number;
    let offset: number;
    if ($('.chess_info__turnSide').hasClass('bg-white')) {
      side = 'white';
    } else side = 'black';
    $('.ChessBoardCell.active').removeClass('active');
    $('.ChessBoardCell.available').removeClass('available');
    if ($(this).children('.ChessBoardCell__ChessPiece').hasClass(side)) {
      $(this).addClass('active');
      row_index = $.inArray(
        $(this).parent().attr('class').split(' ')[1],
        ChessBoardRows
      );
      num = Number($(this).attr('class').split(' ')[1]);
      if (side == 'white') {
        offset = Number(1);
      } else offset = Number(-1);

      switch ($(this).children().attr('class').split(' ')[2]) {
        case 'pawn':
          if (
            ($('.ChessBoardCell.active').hasClass('2') && side == 'white') ||
            ($('.ChessBoardCell.active').hasClass('7') && side == 'black')
          ) {
            if (
              !$('.ChessBoardRow.' + ChessBoardRows[row_index])
                .children('.' + (num + offset))
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            ) {
              AddClassAvailable(
                ChessBoardRows[row_index],
                num + 2 * offset,
                side
              );
            }
          }
          AddClassAvailable(ChessBoardRows[row_index], num + offset);
          if (
            $('.ChessBoardRow.' + ChessBoardRows[row_index + 1])
              .children('.' + (num + offset))
              .children()
              .hasClass('ChessBoardCell__ChessPiece')
          ) {
            AddClassAvailable(
              ChessBoardRows[row_index + 1],
              num + offset,
              true
            );
          }

          if (
            $('.ChessBoardRow.' + ChessBoardRows[row_index - 1])
              .children('.' + (num + offset))
              .children()
              .hasClass('ChessBoardCell__ChessPiece')
          ) {
            AddClassAvailable(
              ChessBoardRows[row_index - 1],
              num + offset,
              side,
              true
            );
          }
          break;
        case 'queen':
        case 'rook':
          $(this)
            .prevUntil('.ChessBoardCell:has(.ChessBoardCell__ChessPiece)')
            .addClass('available');
          if (
            !$(this)
              .prevAll(':has(.ChessBoardCell__ChessPiece)')
              .first()
              .children()
              .hasClass(side)
          ) {
            $(this)
              .prevAll(':has(.ChessBoardCell__ChessPiece)')
              .first()
              .addClass('available');
          }

          $(this)
            .nextUntil(':has(.ChessBoardCell__ChessPiece)')
            .addClass('available');
          if (
            !$(this)
              .nextAll(':has(.ChessBoardCell__ChessPiece)')
              .first()
              .children()
              .hasClass(side)
          ) {
            $(this)
              .nextAll(':has(.ChessBoardCell__ChessPiece)')
              .first()
              .addClass('available');
          }
          let k: number = 1;
          while (typeof ChessBoardRows[row_index + k] != 'undefined') {
            AddClassAvailable(ChessBoardRows[row_index + k], num, true);
            if (
              $('.' + ChessBoardRows[row_index + k] + '>.' + num)
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }
          k = 1;
          while (typeof ChessBoardRows[row_index - k] != 'undefined') {
            AddClassAvailable(ChessBoardRows[row_index - k], num, true);
            if (
              $('.' + ChessBoardRows[row_index - k] + '>.' + num)
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }
          if ($(this).children().attr('class').split(' ')[2] == 'rook') break;

        case 'queen':
        case 'bishop':
          k = 1;
          while (typeof ChessBoardRows[row_index + k] != 'undefined') {
            AddClassAvailable(
              ChessBoardRows[row_index + k],
              num + k * offset,
              true
            );
            if (
              $('.' + ChessBoardRows[row_index + k] + '>.' + (num + k * offset))
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }
          k = 1;

          while (typeof ChessBoardRows[row_index + k] != 'undefined') {
            AddClassAvailable(
              ChessBoardRows[row_index + k],
              num - k * offset,
              true
            );
            if (
              $('.' + ChessBoardRows[row_index + k] + '>.' + (num - k * offset))
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }
          k = 1;

          while (typeof ChessBoardRows[row_index - k] != 'undefined') {
            AddClassAvailable(
              ChessBoardRows[row_index - k],
              num - k * offset,
              true
            );
            if (
              $('.' + ChessBoardRows[row_index - k] + '>.' + (num - k * offset))
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }
          k = 1;

          while (typeof ChessBoardRows[row_index - k] != 'undefined') {
            AddClassAvailable(
              ChessBoardRows[row_index - k],
              num + k * offset,
              true
            );
            if (
              $('.' + ChessBoardRows[row_index - k] + '>.' + (num + k * offset))
                .children()
                .hasClass('ChessBoardCell__ChessPiece')
            )
              break;
            k++;
          }

          break;

        case 'knight':
          AddClassAvailable(
            ChessBoardRows[row_index + 1],
            num + offset * 2,
            true
          );
          AddClassAvailable(
            ChessBoardRows[row_index - 1],
            num + offset * 2,
            true
          );
          AddClassAvailable(ChessBoardRows[row_index + 2], num + offset, true);
          AddClassAvailable(ChessBoardRows[row_index - 2], num + offset, true);
          AddClassAvailable(ChessBoardRows[row_index + 2], num - offset, true);
          AddClassAvailable(ChessBoardRows[row_index - 2], num - offset, true);
          AddClassAvailable(
            ChessBoardRows[row_index + 1],
            num - offset * 2,
            true
          );
          AddClassAvailable(
            ChessBoardRows[row_index - 1],
            num - offset * 2,
            true
          );
          break;

        case 'king':
          AddClassAvailable(ChessBoardRows[row_index - 1], num + offset, true);
          AddClassAvailable(ChessBoardRows[row_index], num + offset, true);
          AddClassAvailable(ChessBoardRows[row_index + 1], num + offset, true);
          AddClassAvailable(ChessBoardRows[row_index + 1], num, true);
          AddClassAvailable(ChessBoardRows[row_index + 1], num - offset, true);
          AddClassAvailable(ChessBoardRows[row_index], num - offset, true);
          AddClassAvailable(ChessBoardRows[row_index - 1], num - offset, true);
          AddClassAvailable(ChessBoardRows[row_index - 1], num, true);
          break;
      }
    } else {
      $(this).addClass('WrongSide');
      $('.wrapper').append(
        $('<div>', {
          class: 'infoWrongSide',
          text: 'now turn is ' + side,
        })
      );
      $('.infoWrongSide').append(
        $('<div>', {
          text: 'X',
          class: 'CloseWindow infoWrongSide__CloseBtn',
        })
      );
      $('.wrapper').toggleClass('pointer-events-none');
      $('.infoWrongSide').toggleClass('pointer-events-auto');
      $('body').addClass('close');
    }
  }
});

const ChangeSide: Function = (): void => {
  $('.chess_info__turnSide').toggleClass('bg-white');
  $('.chess_info__turnSide').toggleClass('bg-black');
};

$('.chess_info__btnReset').click((): void => {
  $('.ChessBoardCell').empty();
  $('.ChessBoardCell').removeClass('active available');
  FillChessBoard();
});

$('.chess_info__turnSide').click(() => ChangeSide());

$(document).on('click', '.CloseWindow', (): void => {
  $(this).parent().remove();
});

$(document).on(
  'click',
  '.infoWrongSide__CloseBtn,.close,.infoVictory__CloseBtn,.ChoisePiece__CloseBtn',
  (): void => {
    $('.WrongSide.ChessBoardCell').removeClass('WrongSide');
    $('.wrapper').removeClass('pointer-events-none');
    $('body').removeClass('close');
    $('.infoWrongSide').remove();
  }
);
                                                                                                                                                                                                                                                                                                                                    