//should accept an array of autocompelete values
//should have an input
// input should interact on typing
// it should display a list of values

const countryArray = ['Afg', 'COL', 'Cypurs', 'Norway', 'Zeliks']
//add restrictions 

export const Autocomplete = () => {
    const handleOnKeywordInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key)

    }

    return (
        <div>
            <input onKeyDown={handleOnKeywordInput} onKeyDownCapture={handleOnKeywordInput}/>

            <ul className="text-3xl font-bold underline">
                <li>35</li>
                <li>43</li>
            </ul>
        </div>
    )
}


