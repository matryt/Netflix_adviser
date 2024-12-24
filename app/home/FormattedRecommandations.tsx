type FormattedRecommandationsProps = {
    recommendations: string;
};

const FormattedRecommandations: React.FC<FormattedRecommandationsProps> = ({ recommendations }) => {
    const formattedRecommandations = recommendations.split('\n').map((line, index) => <p key={index}>{line}</p>);
    return <div>{formattedRecommandations}</div>;
}

export default FormattedRecommandations;