import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SmallBox from '../../components/SmallBox'

const Welcome = () => {
    return (
        <>
            <ContentHeader title="Dashboard" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <SmallBox title="Total Number of Project(s)" number={10} bg="bg-warning" />
                        <SmallBox title="Total Number of Active SPP" number={10} bg="bg-success" />
                        <SmallBox title="Total Number of successful projects" number={10} bg="bg-danger" />
                        <SmallBox title="Pending Project(s)" number={10} bg="bg-info" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome