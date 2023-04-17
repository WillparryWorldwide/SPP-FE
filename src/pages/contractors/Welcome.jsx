import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SmallBox from '../../components/SmallBox'

const Welcome = () => {
    return (
        <>
            <ContentHeader title="Dashboard" />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <SmallBox title="Total Number of Project(s)" number={10} bg="bg-warning" />
                        <SmallBox title="Successful Project(s)" number={10} bg="bg-success" />
                        <SmallBox title="Unsuccessful of Project(s)" number={10} bg="bg-danger" />
                        <SmallBox title="Pending Project(s)" number={10} bg="bg-info" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome