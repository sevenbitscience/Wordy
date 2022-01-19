var wrd = '';
var rowNum = 0;
var playing = true;

var rows = 6;

var letters = ['↵', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '⌫'];

const wrds = ['adopt', 'rover', 'onion', 'fotos', 'media', 'empty', 'virus', 'elvis', 'flush', 'kathy', 'steps', 'drain', 'enjoy', 'vocal', 'japan', 'delta', 'crude', 'edgar', 
'large', 'merry', 'prior', 'hired', 'print', 'aside', 'money', 'samoa', 'share', 'logos', 'yeast', 'betty', 'craig', 'metal', 'round', 'shows', 'visit', 'tommy', 'adult', 'safer', 'build', 'canal', 'civil', 'apnic', 'jamie', 'cohen', 'dutch', 'admin', 'bobby', 'holly', 'dense', 'boats', 'ghost', 'trust', 'codes', 'haven', 'wheel', 'theme', 'faith', 'would', 'merit', 'tests', 'tiger', 'delhi', 'zones', 'april', 'pairs', 'shift', 'arrow', 'shown', 'court', 'paxil', 'forge', 'tracy', 'world', 'queen', 'valve', 'spies', 'write', 'monte', 'omaha', 'allah', 'wagon', 'thong', 'drill', 'swiss', 'check', 'casey', 'frost', 'lodge', 'orbit', 'along', 'class', 'faced', 'plays', 'ivory', 'blind', 'bands', 'prize', 'under', 'korea', 'kenny', 'merge', 'skill', 'tunes', 'among', 'badly', 'aimed', 'atlas', 'after', 'wider', 'tubes', 'drama', 'token', 'balls', 'asked', 'fuzzy', 'mambo', 'belle', 'brave', 'chick', 'lucia', 'coast', 'handy', 'teddy', 'teach', 'armor', 'robin', 'enter', 'fixed', 'carlo', 'craft', 'cedar', 'north', 'terry', 'lanes', 'hello', 'doors', 'basin', 'maine', 'filme', 'cream', 'photo', 'beast', 'label', 'euros', 'stack', 'known', 'hayes', 'marks', 'oscar', 'alarm', 'guild', 'mills', 'aging', 'danny', 'emacs', 'moses', 'steel', 'towns', 'three', 'brick', 'jones', 'apple', 'sorts', 'debut', 'those', 'races', 'roads', 'buddy', 'forth', 'trans', 'grows', 'gnome', 'comes', 'villa', 'latex', 'slots', 'perry', 'apart', 'lyric', 'roses', 'album', 'union', 'valid', 'crazy', 'scoop', 'males', 'spain', 'woods', 'white', 'funny', 'river', 'motor', 'audit', 'thumb', 'learn', 'sonic', 'swift', 'storm', 'stamp', 'karma', 'mardi', 'shade', 'grant', 'vinyl', 'herbs', 'yield', 'waves', 'armed', 'burns', 'wines', 'rocky', 'ready', 'goals', 'agree', 'hosts', 'disks', 'gains', 'kodak', 'genre', 'joint', 'paths', 'reset', 'naval', 'upset', 'cindy', 'meant', 'today', 'baker', 'shell', 'papua', 'panic', 'malta', 'italy', 'drive', 'pixel', 'agent', 'chose', 'frame', 'lists', 'penny', 'probe', 'sluts', 'johns', 'worry', 'bucks', 'minor', 'trees', 'laugh', 'legal', 'daddy', 'simon', 'yemen', 'owner', 'mails', 'stops', 'cycle', 'loose', 'jacob', 'serum', 'bytes', 'based', 'worst', 'views', 'ideal', 'busty', 'needs', 'whats', 'jimmy', 'hairy', 'final', 'brown', 'devil', 'seats', 'flour', 'strap', 'hotel', 'align', 'julia', 'liked', 'msgid', 'cable', 'gifts', 'spend', 'match', 'multi', 'makes', 'knock', 'enemy', 'chest', 'audio', 'vegas', 'trail', 'nokia', 'qatar', 'tasks', 'nails', 'dealt', 'upper', 'sharp', 'wrist', 'modem', 'brush', 'watch', 'opens', 'crowd', 'ships', 'judge', 'skins', 'sorry', 'amino', 'avoid', 'diana', 'promo', 'ellen', 'broad', 'bloom', 'islam', 'sucks', 'alien', 'naked', 'pants', 'eagle', 'larry', 'novel', 'seeds', 'going', 'scuba', 'dance', 'hobby', 'carey', 'badge', 'corps', 'ultra', 'chief', 'robot', 'scary', 'heads', 'inner', 'moore', 'yards', 'fresh', 'randy', 'tumor', 'bride', 'store', 'stock', 'press', 'brief', 'forty', 'below', 'fired', 'click', 'milan', 'doubt', 'actor', 'peace', 'ebook', 'touch', 'lined', 'lemon', 'plaza', 'tulsa', 'women', 'yacht', 'edges', 'dolls', 'paper', 'china', 'timer', 'chuck', 'intro', 'shark', 'trade', 'egypt', 'charm', 'snake', 'wheat', 'mount', 'pitch', 'death', 'brand', 'stuck', 'mazda', 'ruled', 'juice', 'banks', 'radar', 'brake', 'pills', 'canon', 'loops', 'derek', 'moral', 'souls', 'least', 'flows', 'gonna', 'davis', 'spare', 'found', 'issue', 'works', 'nodes', 'roles', 'screw', 'pumps', 'scott', 'tuner', 'bills', 'fails', 'chess', 'carol', 'proof', 'phase', 'sound', 'lewis', 'chair', 'booth', 'pilot', 'congo', 'latin', 'hills', 'sheet', 'began', 'fully', 'acids', 'socks', 'donor', 'salon', 'lives', 'spine', 'poker', 'named', 'shops', 'plate', 'parks', 'dated', 'watts', 'oasis', 'likes', 'greek', 'speed', 'added', 'arise', 'fatty', 'parts', 'essay', 'retro', 'focus', 'story', 'pages', 'spray', 'files', 'chase', 'coins', 'guest', 'fewer', 'night', 'sized', 'lamps', 'roman', 'house', 'exist', 'clerk', 'carry', 'sheer', 'built', 'tampa', 'coach', 'nurse', 'poems', 'point', 'uncle', 'phone', 'heard', 'horse', 'above', 'kevin', 'dairy', 'butts', 'width', 'depth', 'sagem', 'belly', 'value', 'falls', 'rehab', 'blood', 'ridge', 'hindu', 'bones', 'blame', 'silly', 'owned', 'users', 'teens', 'logan', 'green', 'wants', 'puppy', 'stood', 'theft', 'tours', 'burke', 'shine', 'basis', 'total', 'allen', 'stone', 'jesus', 'acres', 'tvcom', 'coral', 'heath', 'costs', 'crash', 'crown', 'cheap', 'queue', 'dubai', 'highs', 'shoes', 'bonus', 'newly', 'drunk', 'lunch', 'month', 'welsh', 'outer', 'mines', 'equal', 'plans', 'combo', 'allow', 'pride', 'annex', 'cents', 'tells', 'nerve', 'tears', 'slide', 'renew', 'chips', 'jokes', 'hence', 'level', 'sanyo', 'blues', 'music', 'close', 'drums', 'sport', 'yahoo', 'whale', 'track', 'cliff', 'doing', 'whole', 'clean', 'shore', 'tires', 'jewel', 'const', 'blink', 'smile', 'price', 'donna', 'again', 'scope', 'sense', 'tamil', 'cargo', 'tyler', 'grown', 'prove', 'chart', 'error', 'quiet', 'vital', 'bears', 'fault', 'steam', 'risks', 'blast', 'field', 'refer', 'could', 'patch', 'sales', 'paste', 'marco', 'menus', 'fluid', 'walls', 'bunch', 'holds', 'meyer', 'czech', 'trace', 'omega', 'depot', 'aware', 'olive', 'syria', 'elect', 'ghana', 'study', 'ebony', 'fires', 'colin', 'login', 'boxes', 'stuff', 'civic', 'usage', 'vault', 'wales', 'lived', 'clark', 'staff', 'thing', 'aruba', 'laden', 'julie', 'sells', 'daisy', 'dryer', 'ellis', 'speak', 'fares', 'xerox', 'ranks', 'skype', 'spent', 'slope', 'rapid', 'fight', 'cheat', 'maple', 'shape', 'exams', 'guess', 'knife', 'fonts', 'clear', 'table', 'alpha', 'giant', 'ratio', 'ocean', 'skirt', 'trunk', 'slave', 'glass', 'breed', 'alive', 'other', 'lance', 'turbo', 'rouge', 'drove', 'filed', 'buyer', 'facts', 'later', 'whose', 'perth', 'leeds', 'intel', 'route', 'minus', 'camel', 'super', 'award', 'mercy', 'clips', 'rates', 'tapes', 'bored', 'taste', 'cover', 'toxic', 'brass', 'quick', 'occur', 'homes', 'micro', 'linda', 'anime', 'weeks', 'laura', 'mouse', 'right', 'condo', 'minds', 'given', 'leave', 'focal', 'sends', 'lakes', 'dover', 'clara', 'inter', 'fifth', 'emily', 'flags', 'lanka', 'worth', 'jenny', 'epson', 'pulse', 'eight', 'quest', 'talks', 'calls', 'raise', 'false', 'autos', 'bible', 'scene', 'dream', 'sleep', 'where', 'comic', 'salem', 'salad', 'manor', 'start', 'bless', 'gamma', 'drops', 'eddie', 'shall', 'tooth', 'image', 'folks', , 'sunny', 'devon', 'quite', 'diane', 'crack', 'paint', 'bruce', 'racks', 'hoped', 'reply', 'arena', 'plane', 'beach', 'ozone', 'means', 'jerry', 'small', 'takes', 'seems', 'organ', 'array', 'digit', 'black', 'tries', 'helps', 'jesse', 'wives', 'james', 'grill', 'light', 'lover', 'fruit', 'colon', 'pearl', 'major', 'oxide', 'fixes', 'sweet', 'shame', 'power', 'board', 'bound', 'remix', 'mixer', 'batch', 'wings', 'walks', 'links', 'specs', 'trick', 'lucas', 'first', 'floor', 'offer', 'texas', 'derby', 'honda', 'sandy', 'reach', 'mayor', 'taxes', 'genes', 'bitch', 'cross', 'sbjct', 'yours', 'until', 'taken', 'guide', 'purse', 'fairy', 'names', 'excel', 'patio', 'liver', 'joyce', 'kenya', 'dylan', 'bonds', 'verde', 'samba', 'paris', 'stand', 'kings', 'kitty', 'areas', 'chris', 'holes', 'fears', 'sight', 'gives', 'limit', 'angry', 'shaft', 'about', 'disco', 'might', 'range', 'birds', 'goods', 'years', 'tahoe', 'exact', 'seven', 'wiley', 'smart', 'angle', 'locks', 'wells', 'berry', 'punch', 'foods', 'cards', 'knows', 'lopez', 'nepal', 'hours', 'debug', 'laser', 'ahead', 'cells', 'viral', 'posts', 'rhode', 'fibre', 'water', 'adobe', 'spots', 'lloyd', 'grace', 'lower', 'teeth', 'meals', 'alone', 'seeks', 'ferry', 'birth', 'modes', 'gauge', 'noted', 'layer', 'climb', 'proud', 'teams', 'cache', 'relay', 'blade', 'tight', 'frank', 'local', 'saver', 'throw', 'wired', 'lexus', 'blake', 'march', 'query', 'devel', 'being', 'bacon', 'bench', 'grass', 'since', 'cloth', 'loves', 'realm', 'sides', 'logic', 'leads', 'beats', 'faces', 'reads', 'input', 'joins', 'ports', 'bryan', 'scout', 'voice', 'child', 'amber', 'count', 'notre', 'rally', 'beans', 'flood', 'jason', 'grand', 'types', 'units', 'satin', 'cubic', 'train', 'alloy', 'candy', 'which', 'feels', 'event', 'books', 'cases', 'score', 'great', 'spank', 'tired', 'lions', 'maybe', 'unity', 'isaac', 'sparc', 'pasta', 'amend', 'words', 'finds', 'dying', 'spell', 'lying', 'forms', 'fatal', 'fiber', 'yukon', 'brian', 'abuse', 'dozen', 'dress', 'cakes', 'times', 'choir', 'nylon', 'hands', 'gates', 'stays', 'curve', 'susan', 'serve', 'still', 'mason', 'order', 'shake', 'ralph', 'thank', 'asset', 'flame', 'tract', 'quote', 'saved', 'strip', 'elite', 'diary', 'heavy', 'maria', 'lines', 'place', 'opera', 'claim', 'janet', 'earth', 'newer', 'jeans', 'picks', 'polar', 'royal', 'keeps', 'iraqi', 'leone', 'drink', 'games', 'blogs', 'metro', 'scale', 'truth', 'voted', 'bingo', 'spoke', 'medal', 'delay', 'ended', 'solve', 'chain', 'block', 'thats', 'awful', 'funds', 'crops', 'lobby', 'sizes', 'alias', 'short', 'icons', 'chile', 'dried', 'blair', 'dicke', 'daily', 'wayne', 'deals', 'vista', 'billy', 'decor', 'venue', 'every', 'macro', 'grain', 'witch', 'funky', 'kelly', 'cabin', 'basic', 'angel', 'alter', 'humor', 'plots', 'pussy', 'rocks', 'drawn', 'shock', 'beads', 'flesh', 'casio', 'setup', 'creek', 'pound', 'fence', 'zdnet', 'nasty', 'boxed', 'tough', 'clock', 'kinds', 'fraud', 'plant', 'index', 'squad', 'saint', 'third', 'piano', 'manga', 'quilt', 'babes', 'miami', 'steve', 'peers', 'roger', 'dodge', 'suite', 'girls', 'heart', 'brook', 'sigma', 'katie', 'alice', 'discs', 'saves', 'apply', 'wendy', 'calif', 'panel', 'think', 'cisco', 'blond', 'mixed', 'rooms', 'split', 'marie', 'roots', 'toner', 'these', 'howto', 'elder', 'lands', 'flyer', 'style', 'tiles', 'sword', 'space', 'guard', 'sudan', 'shelf', 'fifty', 'acute', 'shirt', 'lotus', 'nancy', 'rough', 'loans', 'wrote', 'rural', 'annie', 'bread', 'harry', 'worse', 'wages', 'urban', 'plain', 'forum', 'fleet', 'begin', 'draws', 'haiti', 'farms', 'while', 'cause', 'blank', 'wound', 'sites', 'prime', 'saudi', 'never', 'chevy', 'grams', 'wrong', 'karen', 'young', 'twice', 'henry', 'buses', 'rider', 'their', 'bring', 'mario', 'surge', 'video', 'youth', 'wanna', 'grade', 'cited', 'glenn', 'india', 'anger', 'sarah', 'stats', 'loved', 'argue', 'smith', 'honey', 'clubs', 'linux', 'broke', 'treat', 'rated', 'pizza', 'indie', 'myers', 'there', 'votes', 'color', 'tools', 'sally', 'songs', 'thick', 'proxy', 'solar', 'looks', 'asian', 'klein', 'clone', 'ranch', 'turns', 'movie', 'twist', 'baths', 'inbox', 'motel', 'spice', 'helen', 'tokyo', 'moves', 'weird', 'maker', 'truck', 'cyber', 'waste', 'trial', 'brain', 'kills', 'sperm', 'bikes', 'email', 'lucky', 'irish', 'alert', 'glory', 'floyd', 'horny', 'loads', 'terms', 'labor', 'meets', 'swing', 'diego', 'polls', 'items', 'singh', 'group', 'noble', 'favor', 'miles', 'nikon', 'winds', 'bases', 'truly', 'entry', 'idaho', 'tribe', 'gotta', 'firms', 'break', 'dates', 'woman', 'ought', 'draft', 'evans', 'grove', 'films', 'barry', 'globe', 'santa', 'noise', 'boost', 'early', 'hints', 'notes', 'rings', 'catch', 'hopes', 'tones', 'tions', 'ideas', 'sugar', 'float', 'human', 'solid', 'fever', 'sauce', 'fancy', 'louis', 'admit', 'kinda', 'allan', 'title', 'wires', 'trout', 'rides', 'sheep', 'honor', 'topic', 'stage', 'steal', 'smell', 'boots', 'crest', 'alike', 'peter', 'begun', 'rules', 'usual', 'smoke', 'magic', 'cloud', 'costa', 'blend', 'volvo', 'trips', 'tower', 'camps', 'radio', 'tanks', 'older', 'using', 'keith', 'often', 'adams', 'moved', 'texts', 'front', 'rebel', 'shots', 'relax', 'state', 'extra', 'feeds', 'dirty', 'meter', 'stick', 'pools', 'grave', 'belts', 'packs', 'graph', 'tales', 'signs', 'model', 'david', 'crime', 'trash', 'verse', 'stars', 'burst', 'suits', 
'happy', 'pipes', 'south', 'piece', 'gross', 'shoot', 'tried', 'flash', 'trend', 'party', 'rolls', 'chaos', 'force', 'utils', 'lease', 'sixth', 'bunny', 'twins', 'rugby', 'mouth', 'sting'];

correct_wrd = Math.floor(Math.random() * wrds.length);

lose_screen = "<div class=\"lose popup\">You lose!<div class=\"word-reveal\">The word was: " + wrds[correct_wrd] + "</div></div>";
win_screen = "<div class=\"win popup\">You Win!</div>";

function showWord(word) {
    let wrdArray = word.split("");
    
    let i = 0;
    let activeRow = $(".game-container .row").eq(rowNum).find(".square");
    let activeLetter = $(activeRow).first();

    for (const letter of wrdArray) {
        $(activeLetter).text(letter);
        activeLetter = $(activeLetter).next();
        i++;
    }
    
    while (i<5) {
        $(activeLetter).text("");
        activeLetter = $(activeLetter).next();
        i++;
    }
}

function errorShake() {
    $(".game-container").animate({left: '+=1em'}, "fast");
    $(".game-container").animate({left: '-=2em'}, "fast");
    $(".game-container").animate({left: '+=2em'}, "fast");
    $(".game-container").animate({left: '-=1em'}, "fast");
}

function testWord(word_in) {
    let word = word_in.toLowerCase();
    if (wrds.includes(word)) {
        let activeRow = $(".game-container .row").eq(rowNum).find(".square");
        let activeLetter = $(activeRow).first();
        let word_chars = word.split("");
        let ans_chars = wrds[correct_wrd].split("");
        let i = 0;
        for (const letter of word_chars) {
            if (ans_chars.includes(letter)) {
                if (word_chars[i] == ans_chars[i]) {
                    $(activeLetter).css("background-color", "green");
                    $($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color", "green");
                } else {
                    $(activeLetter).css("background-color", "yellow");
                    $($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color", "yellow");
                }
            } else {
                $(activeLetter).css("background-color", "gray");
                $($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color", "gray");
            }
            activeLetter = $(activeLetter).next();
            i++;
        }
        if (word == wrds[correct_wrd]) {
            $(".game-container").after(win_screen);
            playing = false;
            return
        }
        $(".game-container .row").eq(rowNum).css("background-color", "white");
        rowNum++;
        wrd = "";
        if (rowNum < rows) {
            $(".game-container .row").eq(rowNum).css("background-color", "lightgray");
        }
    } else {
        errorShake();
    }

    if (rowNum == rows) {
        playing = false;
        $(".game-container").after(lose_screen);
        return;
    }
}

function GenerateBoard(height) {
    for (let r = 0; r < height; r++) {
        $(".game-container").append("<div class=\"row\"></div>");
        for (let r = 0; r < 5; r++) {
            $(".game-container .row").last().append("<div class=\"square\"></div>");
        }
    }
}

$(document).ready(function () {
    console.log(wrds[correct_wrd]);
    GenerateBoard(rows);

    $(".game-container .row").eq(rowNum).css("background-color", "lightgray");

    $(".game-container").after("<div class=\"letters\"><div>");

    letters.forEach(lttr => {
        $(".letters").append("<div class=\"lttr\">" + lttr + "</div>");
    });

    if (playing) {
        $("body").keydown(function (e) {
            if (e.which >= 65 && e.which <= 90 && wrd.length < 5) {
                wrd = wrd + String.fromCharCode(e.which);
            } else if (e.which == 8) {
                wrd = wrd.slice(0, -1);
            } else if (e.which == 13) {
                if (rowNum < 6) {
                    if (wrd.length == 5) {
                        testWord(wrd);
                    } else {
                        errorShake();
                    }
                }
            }
            showWord(wrd);
        });
        
        $(".lttr").click(function (e) { 
            e.preventDefault();
            let letter = $(this).text();
            if (rowNum < rows) {
                if (letter == "↵" && wrd.length == 5) {
                    testWord(wrd);
                    return;
                }
                if (letter == "⌫" && wrd.length <= 5) {
                    wrd = wrd.slice(0, -1);
                    showWord(wrd);
                    return;
                }
                if (wrd.length < 5) {
                    wrd = wrd + letter.toUpperCase();
                    showWord(wrd);
                }
            } else {
                errorShake();
            }
        });
    }
});