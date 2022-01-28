var wrd = '';
var rowNum = 0;
var playing = true;

var rows = 6;

var letters = ['↵', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '⌫'];

const wrds = ['adopt', 'rover', 'onion', 'fotos', 'media', 'empty', 'virus', 'elvis', 'flush','steps', 'drain', 'enjoy', 'vocal', 'japan', 'delta', 'crude', 
'large', 'merry', 'prior', 'hired', 'print', 'aside', 'money', 'samoa', 'share', 'logos', 'yeast', 'metal', 'round', 'shows', 'visit', 'adult', 'safer', 'build', 'canal', 'civil', 'apnic', 'dutch', 'admin', 'holly', 'dense', 'boats', 'ghost', 'trust', 'codes', 'haven', 'wheel', 'theme', 'faith', 'would', 'merit', 'tests', 'tiger', 'delhi', 'zones', 'april', 'pairs', 'shift', 'arrow', 'shown', 'court', 'paxil', 'forge', 'world', 'queen', 'valve', 'spies', 'write', 'monte', 'omaha', 'allah', 'wagon', 'drill', 'swiss', 'check', 'casey', 'frost', 'lodge', 'orbit', 'along', 'class', 'faced', 'plays', 'ivory', 'blind', 'bands', 'prize', 'under', 'korea', 'merge', 'skill', 'tunes', 'among', 'badly', 'aimed', 'atlas', 'after', 'wider', 'tubes', 'drama', 'token', 'balls', 'asked', 'fuzzy', 'mambo', 'brave', 'chick', 'coast', 'handy', 'teddy', 'teach', 'armor', 'robin', 'enter', 'fixed', 'craft', 'cedar', 'north', 'lanes', 'hello', 'doors', 'basin', 'maine', 'cream', 'photo', 'beast', 'label', 'euros', 'stack', 'known', 'hayes', 'marks', 'alarm', 'guild', 'mills', 'aging', 'emacs', 'moses', 'steel', 'towns', 'three', 'brick', 'jones', 'apple', 'sorts', 'debut', 'those', 'races', 'roads', 'buddy', 'forth', 'trans', 'grows', 'gnome', 'comes', 'villa', 'latex', 'slots', 'apart', 'lyric', 'roses', 'album', 'union', 'valid', 'crazy', 'scoop', 'males', 'spain', 'woods', 'white', 'funny', 'river', 'motor', 'audit', 'thumb', 'learn', 'sonic', 'swift', 'storm', 'stamp', 'karma', 'shade', 'grant', 'vinyl', 'herbs', 'yield', 'waves', 'armed', 'burns', 'wines', 'rocky', 'ready', 'goals', 'agree', 'hosts', 'disks', 'gains', 'kodak', 'genre', 'joint', 'paths', 'reset', 'naval', 'upset', 'meant', 'today', 'baker', 'shell', 'panic', 'malta', 'italy', 'drive', 'pixel', 'agent', 'chose', 'frame', 'lists', 'penny', 'probe', 'johns', 'worry', 'bucks', 'minor', 'trees', 'laugh', 'legal', 'daddy', 'yemen', 'owner', 'mails', 'stops', 'cycle', 'loose', 'serum', 'bytes', 'based', 'worst', 'views', 'ideal', 'busty', 'needs', 'whats', 'hairy', 'final', 'brown', 'devil', 'seats', 'flour', 'strap', 'hotel', 'align', 'liked', 'cable', 'gifts', 'spend', 'match', 'multi', 'makes', 'knock', 'enemy', 'chest', 'audio', 'vegas', 'trail', 'nokia', 'qatar', 'tasks', 'nails', 'dealt', 'upper', 'sharp', 'wrist', 'modem', 'brush', 'watch', 'opens', 'crowd', 'ships', 'judge', 'skins', 'sorry', 'amino', 'avoid', 'diana', 'promo', 'broad', 'bloom', 'islam', 'sucks', 'alien', 'naked', 'pants', 'eagle', 'novel', 'seeds', 'going', 'scuba', 'dance', 'hobby', 'badge', 'corps', 'ultra', 'chief', 'robot', 'scary', 'heads', 'inner', 'moore', 'yards', 'fresh', 'randy', 'tumor', 'bride', 'store', 'stock', 'press', 'brief', 'forty', 'below', 'fired', 'click', 'milan', 'doubt', 'actor', 'peace', 'ebook', 'touch', 'lined', 'lemon', 'plaza', 'tulsa', 'women', 'yacht', 'edges', 'dolls', 'paper', 'china', 'timer', 'chuck', 'intro', 'shark', 'trade', 'egypt', 'charm', 'snake', 'wheat', 'mount', 'pitch', 'death', 'brand', 'stuck', 'mazda', 'ruled', 'juice', 'banks', 'radar', 'brake', 'pills', 'canon', 'loops', 'derek', 'moral', 'souls', 'least', 'flows', 'gonna', 'davis', 'spare', 'found', 'issue', 'works', 'nodes', 'roles', 'screw', 'pumps', 'scott', 'tuner', 'bills', 'fails', 'chess', 'proof', 'phase', 'sound', 'lewis', 'chair', 'booth', 'pilot', 'congo', 'latin', 'hills', 'sheet', 'began', 'fully', 'acids', 'socks', 'donor', 'salon', 'lives', 'spine', 'poker', 'named', 'shops', 'plate', 'parks', 'dated', 'watts', 'oasis', 'likes', 'greek', 'speed', 'added', 'arise', 'fatty', 'parts', 'essay', 'retro', 'focus', 'story', 'pages', 'spray', 'files', 'chase', 'coins', 'guest', 'fewer', 'night', 'sized', 'lamps', 'roman', 'house', 'exist', 'clerk', 'carry', 'sheer', 'built', 'tampa', 'coach', 'nurse', 'poems', 'point', 'uncle', 'phone', 'heard', 'horse', 'above', 'dairy', 'width', 'depth', 'sagem', 'belly', 'value', 'falls', 'rehab', 'blood', 'ridge', 'hindu', 'bones', 'blame', 'silly', 'owned', 'users', 'teens', 'green', 'wants', 'puppy', 'stood', 'theft', 'tours', 'burke', 'shine', 'basis', 'total', 'allen', 'stone', 'jesus', 'acres', 'tvcom', 'coral', 'heath', 'costs', 'crash', 'crown', 'cheap', 'queue', 'dubai', 'highs', 'shoes', 'bonus', 'newly', 'drunk', 'lunch', 'month', 'welsh', 'outer', 'mines', 'equal', 'plans', 'combo', 'allow', 'pride', 'annex', 'cents', 'tells', 'nerve', 'tears', 'slide', 'renew', 'chips', 'jokes', 'hence', 'level', 'sanyo', 'blues', 'music', 'close', 'drums', 'sport', 'yahoo', 'whale', 'track', 'cliff', 'doing', 'whole', 'clean', 'shore', 'tires', 'jewel', 'blink', 'smile', 'price', 'again', 'scope', 'sense', 'tamil', 'cargo', 'grown', 'prove', 'chart', 'error', 'quiet', 'vital', 'bears', 'fault', 'steam', 'risks', 'blast', 'field', 'refer', 'could', 'patch', 'sales', 'paste', 'marco', 'menus', 'fluid', 'walls', 'bunch', 'holds', 'meyer', 'czech', 'trace', 'omega', 'depot', 'aware', 'olive', 'syria', 'elect', 'ghana', 'study', 'ebony', 'fires', 'login', 'boxes', 'stuff', 'civic', 'usage', 'vault', 'wales', 'lived', 'clark', 'staff', 'thing', 'aruba', 'laden', 'sells', 'daisy', 'dryer', 'speak', 'fares', 'xerox', 'ranks', 'skype', 'spent', 'slope', 'rapid', 'fight', 'cheat', 'maple', 'shape', 'exams', 'guess', 'knife', 'fonts', 'clear', 'table', 'alpha', 'giant', 'ratio', 'ocean', 'skirt', 'trunk', 'slave', 'glass', 'breed', 'alive', 'other', 'turbo', 'rouge', 'drove', 'filed', 'buyer', 'facts', 'later', 'whose', 'perth', 'leeds', 'intel', 'route', 'minus', 'camel', 'super', 'award', 'mercy', 'clips', 'rates', 'tapes', 'bored', 'taste', 'cover', 'toxic', 'brass', 'quick', 'occur', 'homes', 'micro', 'anime', 'weeks', 'mouse', 'right', 'condo', 'minds', 'given', 'leave', 'focal', 'sends', 'lakes', 'dover', 'inter', 'fifth', 'flags', 'lanka', 'worth', 'epson', 'pulse', 'eight', 'quest', 'talks', 'calls', 'raise', 'false', 'autos', 'bible', 'scene', 'dream', 'sleep', 'where', 'comic', 'salem', 'salad', 'manor', 'start', 'bless', 'gamma', 'drops', 'eddie', 'shall', 'tooth', 'image', 'folks', 'sunny', 'devon', 'quite', 'crack', 'paint', 'bruce', 'racks', 'hoped', 'reply', 'arena', 'plane', 'beach', 'ozone', 'means', 'small', 'takes', 'seems', 'organ', 'array', 'digit', 'black', 'tries', 'helps', 'wives', 'grill', 'light', 'lover', 'fruit', 'colon', 'pearl', 'major', 'oxide', 'fixes', 'sweet', 'shame', 'power', 'board', 'bound', 'remix', 'mixer', 'batch', 'wings', 'walks', 'links', 'specs', 'trick', 'first', 'floor', 'offer', 'texas', 'derby', 'honda', 'reach', 'mayor', 'taxes', 'genes', 'cross', 'yours', 'until', 'taken', 'guide', 'purse', 'fairy', 'names', 'excel', 'patio', 'liver', 'kenya', 'bonds', 'verde', 'samba', 'paris', 'stand', 'kings', 'kitty', 'areas', 'holes', 'fears', 'sight', 'gives', 'limit', 'angry', 'shaft', 'about', 'disco', 'might', 'range', 'birds', 'goods', 'years', 'tahoe', 'exact', 'seven', 'wiley', 'smart', 'angle', 'locks', 'wells', 'berry', 'punch', 'foods', 'cards', 'knows', 'lopez', 'nepal', 'hours', 'debug', 'laser', 'ahead', 'cells', 'viral', 'posts', 'rhode', 'fibre', 'water', 'adobe', 'spots', 'grace', 'lower', 'teeth', 'meals', 'alone', 'seeks', 'ferry', 'birth', 'modes', 'gauge', 'noted', 'layer', 'climb', 'proud', 'teams', 'cache', 'relay', 'blade', 'tight', 'local', 'saver', 'throw', 'wired', 'lexus', 'blake', 'march', 'query', 'devel', 'being', 'bacon', 'bench', 'grass', 'since', 'cloth', 'loves', 'realm', 'sides', 'logic', 'leads', 'beats', 'faces', 'reads', 'input', 'joins', 'ports', 'scout', 'voice', 'child', 'amber', 'count', 'notre', 'rally', 'beans', 'flood', 'grand', 'types', 'units', 'satin', 'cubic', 'train', 'alloy', 'candy', 'which', 'feels', 'event', 'books', 'cases', 'score', 'great', 'spank', 'tired', 'lions', 'maybe', 'unity', 'sparc', 'pasta', 'amend', 'words', 'finds', 'dying', 'spell', 'lying', 'forms', 'fatal', 'fiber', 'yukon', 'abuse', 'dozen', 'dress', 'cakes', 'times', 'choir', 'nylon', 'hands', 'gates', 'stays', 'curve', 'serve', 'still', 'order', 'shake', 'thank', 'asset', 'flame', 'tract', 'quote', 'saved', 'strip', 'elite', 'diary', 'heavy', 'lines', 'place', 'opera', 'claim', 'earth', 'newer', 'jeans', 'picks', 'polar', 'royal', 'keeps', 'iraqi', 'drink', 'games', 'blogs', 'metro', 'scale', 'truth', 'voted', 'bingo', 'spoke', 'medal', 'delay', 'ended', 'solve', 'chain', 'block', 'thats', 'awful', 'funds', 'crops', 'lobby', 'sizes', 'alias', 'short', 'icons', 'chile', 'dried', 'daily', 'deals', 'vista', 'decor', 'venue', 'every', 'macro', 'grain', 'witch', 'funky', 'cabin', 'basic', 'angel', 'alter', 'humor', 'plots', 'rocks', 'drawn', 'shock', 'beads', 'flesh', 'casio', 'setup', 'creek', 'pound', 'fence', 'zdnet', 'nasty', 'boxed', 'tough', 'clock', 'kinds', 'fraud', 'plant', 'index', 'squad', 'saint', 'third', 'piano', 'manga', 'quilt', 'babes', 'miami', 'peers', 'roger', 'dodge', 'suite', 'girls', 'heart', 'brook', 'sigma', 'katie', 'alice', 'discs', 'saves', 'apply', 'calif', 'panel', 'think', 'blond', 'mixed', 'rooms', 'split', 'roots', 'toner', 'these', 'elder', 'lands', 'flyer', 'style', 'tiles', 'sword', 'space', 'guard', 'sudan', 'shelf', 'fifty', 'acute', 'shirt', 'lotus', 'rough', 'loans', 'wrote', 'rural', 'bread', 'worse', 'wages', 'urban', 'plain', 'forum', 'fleet', 'begin', 'draws', 'haiti', 'farms', 'while', 'cause', 'blank', 'wound', 'sites', 'prime', 'saudi', 'never', 'chevy', 'grams', 'wrong', 'young', 'twice', 'buses', 'rider', 'their', 'bring', 'mario', 'surge', 'video', 'youth', 'wanna', 'grade', 'cited', 'india', 'anger', 'stats', 'loved', 'argue', 'honey', 'clubs', 'linux', 'broke', 'treat', 'rated', 'pizza', 'indie', 'there', 'votes', 'color', 'tools', 'songs', 'thick', 'proxy', 'solar', 'looks', 'asian', 'clone', 'ranch', 'turns', 'movie', 'twist', 'baths', 'inbox', 'motel', 'spice', 'tokyo', 'moves', 'weird', 'maker', 'truck', 'cyber', 'waste', 'trial', 'brain', 'kills', 'bikes', 'email', 'lucky', 'irish', 'alert', 'glory', 'loads', 'terms', 'labor', 'meets', 'swing', 'polls', 'items', 'group', 'noble', 'favor', 'miles', 'nikon', 'winds', 'bases', 'truly', 'entry', 'idaho', 'tribe', 'gotta', 'firms', 'break', 'dates', 'woman', 'ought', 'draft', 'grove', 'films', 'globe', 'santa', 'noise', 'boost', 'early', 'hints', 'notes', 'rings', 'catch', 'hopes', 'tones', 'ideas', 'sugar', 'float', 'human', 'solid', 'fever', 'sauce', 'fancy', 'admit', 'kinda', 'title', 'wires', 'trout', 'rides', 'sheep', 'honor', 'topic', 'stage', 'steal', 'smell', 'boots', 'crest', 'alike', 'peter', 'begun', 'rules', 'usual', 'smoke', 'magic', 'cloud', 'costa', 'blend', 'volvo', 'trips', 'tower', 'camps', 'radio', 'tanks', 'older', 'using', 'keith', 'often', 'adams', 'moved', 'texts', 'front', 'rebel', 'shots', 'relax', 'state', 'extra', 'feeds', 'dirty', 'meter', 'stick', 'pools', 'grave', 'belts', 'packs', 'graph', 'tales', 'signs', 'model', 'crime', 'trash', 'verse', 'stars', 'burst', 'suits', 
'happy', 'pipes', 'south', 'piece', 'gross', 'shoot', 'tried', 'flash', 'trend', 'party', 'rolls', 'chaos', 'force', 'utils', 'lease', 'sixth', 'bunny', 'twins', 'rugby', 'mouth', 'sting', 'adieu', 'lunar', 'scrap', 'splat', 'slime', 'gloat', 'prism', 'darts', 'sandy', 'mulch', 'knobs', 'foggy', 'frogs', 'masts', 'dingo', 'bolts', 'doves'];

var correct_wrd = Math.floor(Math.random() * wrds.length);

lose_screen = "<div class=\"lose popup\">You lose!<div class=\"word-reveal\">The word was: " + wrds[correct_wrd] + "</div><div class=\"word-reveal\">press enter to play again</div></div>";
win_screen = "<div class=\"win popup\">You Win!<div class=\"word-reveal\">press enter to play again</div></div>";

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
    let word = word_in;
    if (wrds.includes(word.toLowerCase())) {
        let activeRow = $(".game-container .row").eq(rowNum).find(".square");
        let activeLetter = $(activeRow).first();
        let word_chars = word.split("");
        let ans_chars = wrds[correct_wrd].toUpperCase().split("");
        let i = 0;
        for (const letter of word_chars) {
            if (ans_chars.includes(letter)) {
                if (word_chars[i] == ans_chars[i]) {
                    $(activeLetter).css("background-color", "green");
                    $($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color", "green");
                } else {
                    $(activeLetter).css("background-color", "yellow");
                    if ($($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color") != 'rgb(0, 128, 0)') {
                        $($(".letters .lttr").eq(letters.indexOf(word_chars[i]))).css("background-color", "yellow");
                    }
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

    $(".game-container .row").eq(rowNum).css("background-color", "lightgray");

    $(".game-container").after("<div class=\"letters\"><div>");

    letters.forEach(lttr => {
        $(".letters").append("<div class=\"lttr\">" + lttr + "</div>");
    });
}

$(document).ready(function () {
    GenerateBoard(rows);

    $("body").keydown(function (e) {
            if (playing) {
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
            }
            else if (e.which == 13) {
                correct_wrd = Math.floor(Math.random() * wrds.length);
                $(".row").remove();
                $(".letters").remove();
                $(".popup").remove();
                wrd = '';
                rowNum = 0;
                playing = true;
                GenerateBoard(rows);
            }
        });
        
    if (playing) {
        $(".lttr").click(function (e) { 
            e.preventDefault();
            let letter = $(this).text();
            if (rowNum < rows) {
                if (letter == "↵") {
                    if (wrd.length == 5) {
                        testWord(wrd);
                        return;
                    } else {
                        errorShake();
                        return;
                    }
                }
                if (letter == "⌫") {
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