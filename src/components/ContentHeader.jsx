import { Link } from 'react-router-dom'

const ContentHeader = ({title}) => {
    return (
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">{title}</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><Link>Home</Link></li>
                            <li class="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader