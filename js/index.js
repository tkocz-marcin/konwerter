const euro = {};

euro.converter = function() {
    const btn = document.querySelector('.btn--convert');

    const getData = function() {
        let date = new Date(),
            year = date.getFullYear(),
            day = date.getDate(),
            month = date.getMonth(),
            hour = date.getHours(),
            min = date.getMinutes();

            if (min < 10) {
                min = '0' + min;
            }

        return `${year}.${month+1}.${day} ${hour}:${min}`;
    }

    const tileGenerate = function(price, date) { 
    	const tileContainer = document.querySelector('.container_tiles'),
    		tile = document.createElement('div'),
    		tileAmount = document.createElement('div'),
    		tileDate = document.createElement('div'),
    		tilePLN = document.createElement('p'),
    		icon = document.createElement('i'),
    		plnInfo = document.createTextNode('PLN AMOUNT'),
    		dateInfo = document.createTextNode(date);

    		tile.classList.add('tile');

    		tileAmount.classList.add('tile_amount');
    		tileAmount.appendChild(plnInfo);
    		

    		icon.classList.add('fa');
            icon.classList.add('fa-clock-o');

    		tileDate.classList.add('tile_info');
    		tileDate.appendChild(icon);
    		tileDate.appendChild(dateInfo);

    		tilePLN.classList.add('tile_pln');
    		tilePLN.innerText = price.toFixed(4);

    		tileAmount.appendChild(tilePLN);

    		tile.appendChild(tileAmount);
    		tile.appendChild(tileDate);
    		tileContainer.appendChild(tile);
    }

    const randomPrice = function() {
        let random = Math.floor(Math.random() * 100),
            euroPrice = 4.2 * (1 + (random - 50) / 1000);

        return euroPrice;
    }

    const startConverter = function() {
    	const random = randomPrice(),
    		date = getData(),
    		inputValue = document.querySelector('#value').value,
    		price = random*inputValue;

        tileGenerate(price, date);
    }

    btn.addEventListener('click', startConverter);
}();
