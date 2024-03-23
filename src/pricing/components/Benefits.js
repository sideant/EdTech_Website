const benefits = [
    {
        title: "Lowest Price",
        subtitle: "One time offer! Save with the yearly plan!",
    },
    {
        title: "Top Instructors",
        subtitle: "Lifetime Access",
    },
    {
        title: "Unsure? Cancel Anytime",
        subtitle: "Pause your subscription or transfer to a friend!!",
    },
];

export default function Benefits() {
    return (
        <div className="bg-black">
            <div className="column-padding">
                <div className="context-grid x1">
                    {benefits.map(benefit => (
                        <div key={benefit.title} className ="spacing-base">
                            <h3>
                                {benefit.title}
                                 <br/>
                            </h3>
                            <div>{benefit.subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    );
}
