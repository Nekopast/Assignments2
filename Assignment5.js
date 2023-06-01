function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1){
            console.log("This is a palindrome");
        } else{
            console.log("This is not a palindrome");
        }
    }
}
checkPalindrom("racecar");