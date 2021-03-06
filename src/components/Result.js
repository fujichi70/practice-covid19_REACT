export const Result = (props) => {
    const { countryData } = props;
    return (
        <div className="results-container">
        <div>
            <p>日付: <span>{countryData.date.slice(0, 10)}</span></p>
            <p>新規感染者: <span>{countryData.newConfirmed.toLocaleString()}</span> 人</p>
            <p>感染者総数: <span>{countryData.totalConfirmed.toLocaleString()}</span> 人</p>
            <p>新規回復者: <span>{countryData.newRecovered.toLocaleString()}</span> 人</p>
            <p>回復者総数: <span>{countryData.totalRecovered.toLocaleString()}</span> 人</p>
        </div>
        </div>
    );
};