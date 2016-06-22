$(function () {

    // 下決定function，決定場景切換到哪張圖片還有對應的訊息
    function makeDecision(decision) {
        if (currentChoice === 1) {
            currentChoice = 2;
            choice = {
                message: "這個好嗎?",
                yesButtonMessage: "okkk",
                noButtonMessage: "才不要",
                yesButtonShow: true,
                noButtonShow: true
            };
        } else if (currentChoice === 2) {
            if (decision === 1) {
                currentChoice = 8;
                choice = {
                    message: "耶給你大便當!",

                };
            } else {
                currentChoice = 3;
                choice = {
                    message: "煩ㄟ那吃這個啦!",
                    yesButtonMessage: "好啦厚~",
                    noButtonMessage: "QQ不要!",
                    yesButtonShow: true,
                    noButtonShow: true

                };
            }

        } else if (currentChoice === 3) {
            if (decision === 1) {
                currentChoice = 4;
                choice = {
                    message: "恭喜成為文青!",

                };
            } else {
                currentChoice = 5;
                choice = {
                    message: "你只剩這個選項了!",
                    yesButtonMessage: "韓國菜我ㄉ愛",
                    noButtonMessage: "我還是不喜歡...",
                    yesButtonShow: true,
                    noButtonShow: true,
                };
            }

        } else if (currentChoice === 5) {
            if (decision === 1) {
                currentChoice = 6;
                choice = {
                    message: "韓式辣炒年糕!",

                };
            } else {
                currentChoice = 7;
                choice = {
                    message: "餓肚子ㄅ!",

                };
            }

        }
        //決定完之後 重新繪製畫面
        render(choice);

    }

    // 繪製畫面的函數
    function render(choice) {
        $message.text(choice.message);
        $yesButton.text(choice.yesButtonMessage);
        $noButton.text(choice.noButtonMessage);
        // 場景決定要不要顯示yesButton
        if (choice.yesButtonShow)
            $yesButton.show();
        else
            $yesButton.hide();
        // 場景決定要不要顯示noButton
        if (choice.noButtonShow)
            $noButton.show();
        else
            $noButton.hide();

        $("#choice").attr("src", "images/" + currentChoice + ".jpg");
    }

    var choice = {
        message: "想吃什麼呢?",
        yesButtonMessage: "肚子餓~",
        noButtonMessage: "",
        yesButtonShow: true,
        noButtonShow: false
    };
    var currentChoice = 1;

    var $message = $("#message");
    var $yesButton = $("#yesButton");
    var $noButton = $("#noButton");
    // 當按下Yes的時候 使用決定參數1
    $yesButton.click(function () {
        makeDecision(1);
    });
    // 當按下No的時候 使用決定參數2
    $noButton.click(function () {
        makeDecision(2);
    });

    render(choice);
});
