function set_body_height() { // set body height = window height
    $('body').height($(window).height());
  }
  $(document).ready(function() {
    $(window).bind('resize', set_body_height);
    set_body_height();
  });

var quote = '';
var author = '';

function quotes() {
  var randomNumber = Math.floor(Math.random() * 51);
  switch (randomNumber) {
     case 0:
		    quote = 'Discernment is not knowing the difference between right and wrong. It is knowing the difference between right and almost right.';
		    author = 'Charles Spurgeon';
		    break;
     case 1: 
		    quote = 'Be assured, there is nothing new in theology except that which is false.';
		    author = 'Charles Spurgeon';
		    break;
      case 2: 
		    quote = 'Beware of placing even the smallest drop of your confidence on anything apart from the gospel.';
		    author = 'John Calvin';
		    break;
      case 3: 
		    quote = 'Some want to live within the sound of church or chapel. I want to run a rescue shop within a yard of hell.';
		    author = 'C. T. Studd';
		    break;
      case 4:
		    quote = 'Who is willing to suffer for a Savior they won\'t even trouble themselves to learn about.';
		    author = 'Aimee Byrd';
		    break;
      case 5:
		    quote = 'You must submit to supreme suffering in order to discover the completion of joy.';
		    author = 'John Calvin';
		    break;
      case 6:
		    quote = 'While prayer is in the making, God is searching the heart to see from what root and spirit it arises (1 John 5:14).';
		    author = 'John Bunyan';
		    break;
      case 7:
		    quote = 'Here then is a resting place for the heart. Our lives are neither the product of blind fate nor the result of capricious chance, but every detail of them was ordained from all eternity and is now ordered by the living and reigning God.';
		    author = 'A. W. Pink';
		    break;
      case 8:
		    quote = 'Worry is the antithesis of trust. You simply cannot do both. They are mutually exclusive.';
		    author = 'Elizabeth Elliot';
		    break;
      case 9: 
        quote = 'The gospel is not an invitation, but a summons, and to refuse it is not to decline it but to defy it.';
        author = 'Art Azurdia';
        break;
      case 10:
        quote = 'There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry, Mine!';
        author = 'Abraham Kuyper';
        break;
      case 11:
        quote = 'For just as the body without the soul is a lifeless carcass, so also is saying without the doing. The soul of religion is the practiced, working part: "Pure religion and undefiled, before God and the Father, is this, to visit the fatherless and widows in their affliction, and to keep himself unspotted from the world." Talkative is not aware of this truth. He thinks that hearing and talking will make him a good Christian, and so he deceives his own soul.';
        author = 'John Bunyan';
        break;
    case 12:
        quote = 'You are not saved because your repentance and faith are perfect. You are saved because the work of Christ is perfect, and you\'re clinging onto that in your frailty and helplessness.';
        author = 'Paul Washer';
        break;
    case 13:
        quote = 'For as God the Father beholds us in the body of His Son Christ Jesus, He accepts our imperfect obedience as if it were perfect, and covers our works, which are defiled with many stains, with the righteousness of His Son.';
        author = 'John Knox';
        break;
    case 14: 
        quote = 'If you could lose your salvation, you would.';
        author = 'John MacArthur';
        break;
    case 15:
        quote ='We ought to believe that Christ cannot be properly known in any other way than from the Scriptures.';
        author = 'John Calvin';
        break;
    case 16:
        quote = 'It is not sound doctrine that divides the church. It is false doctrine and those who traffic it in.';
        author = 'Chris Rosebrough';
        break;
    case 17:
        quote = 'We are never too wicked to come to Jesus. We can only be too good in our own eyes.';
        author = 'Frans Bakker';
        break;
    case 18:
        quote = 'There never was a person who did unfeignedly repent of sin with believing repentance who was not forgiven. On the other hand, there never was a person forgiven who had not repented of his sin.';
        author = 'Charles Spurgeon';
        break;
    case 19:
        quote = 'So when the devil throws your sins in your face and declares that you deserve death and hell, tell him this: "I admit that I deserve death and hell, what of it? For I know One who suffered and made satisfaction on my behalf. His name is Jesus Christ, Son of God, and where He is there I shall be also!"';
        author = 'Martin Luther';
        break;
    case 20:
        quote = 'You contribute nothing to your salvation except the sin that made it necessary.';
        author = 'Jonathan Edwards';
        break;
    case 21:
        quote = 'Zeal without doctrine is like a sword in the hand of a lunatic.';
        author = 'John Calvin';
        break;
    case 22: 
        quote = 'Grace is in no sense contingent upon or dependent upon what man does.';
        author = 'D. Martyn Lloyd-Jones';
        break;
    case 23:
        quote = 'No pen, no words, no image could express the loveliness of my only, only Lord Jesus.';
        author = 'Samuel Rutherford';
        break;
    case 24:
        quote = 'A man\'s free will does not help at all except to sin.';
        author = 'Augustine';
        break;
    case 25:
        quote = 'Christian! The only thing that makes you differ from the vilest being that pollutes the earth, or from the darkest fiend that gnaws his chain in hell, is the free grace of God!';
        author = 'Octavius Winslow';
        break;
    case 26:
        quote = 'If God loves a person just the way they are, then what is the need for Jesus? Jesus would fail every single evangelism course in Seminary that\'s out there. He turns to a crowd of thousands and says, "If you don\'t hate your life and come to die, don\'t come. If you do not come to die and rise again, DON\'T COME!"';
        author = 'Jeff Durbin';
        break;
    case 27: 
        quote = 'The early Christians were fed to lions not because they wanted to tell the world that \"love wins\" and all will be well, but because of the scandal of Christ and their unflinching commitment to the claim that salvation is found in no other name.';
        author = 'Michael Horton';
        break;
    case 28: 
        quote = 'I know no state of soul more dangerous than to imagine we are born again and sanctified by the Holy Ghost because we have picked up a few religious feelings.';
        author = 'J. C. Ryle';
        break;
    case 29:
        quote = 'He who, struggling with his own weakness, presses towards faith in his moments of anxiety is already in large part victorious.';
        author = 'John Calvin';
        break;
    case 30:
        quote = 'Election guarantees that evangelism will result in genuine converstions.';
        author = 'R. B. Kuiper';
        break;
    case 31:
        quote = 'He foresaw my every fall, my every sin, my every backsliding; yet, nevertheless, fixed His heart upon me. Oh, how the realization of this should bow me in wonder and worship before Him!';
        author = 'A. W. Pink';
        break;
    case 32:
        quote = 'To will is of nature, but to will aright is of grace.';
        author = 'Augustine';
        break;
    case 33:
        quote = 'No soldiers of Christ are ever lost, missing, or left dead on the battlefield.';
        author = 'J. C. Ryle';
        break;
    case 34:
        quote = 'There is nothing more foolish or self-defeating than for a Christian to say that he is not interested in doctrines.';
        author = 'D. Martyn Lloyd-Jones';
        break;
    case 35:
        quote = '"Today you will be with me in paradise" is the whisper of Christ to every dying saint.';
        author = 'Charles Spurgeon';
        break;
    case 36:
        quote = 'Ye will not get leave to steal quietly to heaven, in Christ\'s company, without a conflict and a cross.';
        author = 'Samuel Rutherford';
        break;
    case 37:
        quote = 'The term "decide" has always seemed to me to be quite wrong . . . A sinner does not "decide" for Christ; the sinner "flies" to Christ in utter helplessness and despair saying, "Foul, I to the fountain fly, wash me, Saviour, or I die."';
        author = "D. Martyn Lloyd-Jones";
        break;
    case 38:
        quote = 'You will never glory in God till first of all God has killed your glorying in yourself.';
        author = 'Charles Spurgeon';
        break;
    case 39:
        quote = 'Every many loves the mercies of God, but a saint loves the God of his mercies.';
        author = 'John Flavel';
        break;
    case 40:
        quote = 'God is the highest good of the reasonable creature. The enjoyment of him is our proper; and is the only happiness with which our souls can be satisfied. To go to heaven, fully to enjoy God, is infinitely better than the most pleasant accommodations here. Better than fathers and mothers, husbands, wives, or children, or the company of any, or all earthly friends. These are but shadows, but the enjoyment of God is the substance. These are but scattered beams, but God is the sun. These are but streams, but God is the fountain. These are but drops, but God is the ocean.'; 
        author = 'Jonathan Edwards';
        break;
    case 41: 
        quote = 'Knowledge is proud that she knows so much; wisdom is humble that she knows no more.';
        author = 'William Cowper';
        break;
    case 42:
        quote = 'This is a sure rule: whatever ends in the increase of our love to God proceeds from the love of God to us. A wicked man finds his heart rising against God when He smites him, but a gracious heart cleaves the closer to Him; he can love as well as justify an afflicting God';
        author = 'John Flavel';
        break;
    case 43:
        quote = 'The Christian is a man who expects nothing from this world. He does not pin his hopes on it. Because he knows that it is doomed.';
        author = 'D. Martyn Lloyd-Jones';
        break;
    case 44: 
        quote = 'Sin forsaken is one of the best evidences of sin forgiven.';
        author = 'J. C. Ryle';
        break;
    case 45: 
        quote = 'The Christian faith is ultimately not only a matter of doctrine or understanding or of intellect, it is a condition of the heart.';
        author = 'D. Martyn Lloyd-Jones';
        break;
    case 46:
        quote = 'A man\'s greatest care should be for that place where he dwelleth longest; therefore, eternity should be in his scope.';
        author = 'Thomas Manton';
        break;
    case 47:
        quote = 'When our Lord says, "No man can come to me," we must carefully remember that it is moral inability and not physical inability that he speaks of. We are not to suppose that any man can have a sincere and hearty wish to come to Christ and yet be prevented by some mysterious impotence. The impotence lies in man\'s will. He cannot come because he will not come.';
        author = 'J. C. Ryle';
        break;
    case 48:
        quote = 'The light of human reason differs little from darkness.';
        author = 'John Calvin';
        break;
    case 49:
        quote = 'What is it about your miserable works and doings that you think you could please God more than the sacrifice of His own Son?';
        author = 'Martin Luther';
        break;
    case 50: 
        quote = 'It is the loss of your first love that makes you seek the comfort of your bodies instead of the prosperity of your souls.';
        author = 'Charles Spurgeon';
        break;
      
      
        
        
  }
}

function generateQuote() {
    quotes();
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
