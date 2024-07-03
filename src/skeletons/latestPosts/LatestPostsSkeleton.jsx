import './latest-posts.css'
export default function LatestPostsSkeleton(){
    return(
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header skeleton skeleton-border"   style={{maxHeight:'277px',height:'277px'}}>
                    </div>
                    <div className="card-body">
                        <div className="skeleton skeleton-border" style={{height:'30px'}}></div> <br />
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                    </div>
                </div>
            </div><div className="col-md-4">
                <div className="card">
                    <div className="card-header skeleton skeleton-border"   style={{maxHeight:'277px',height:'277px'}}>
                    </div>
                    <div className="card-body">
                        <div className="skeleton skeleton-border" style={{height:'30px'}}></div> <br />
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header skeleton skeleton-border"   style={{maxHeight:'277px',height:'277px'}}>
                    </div>
                    <div className="card-body">
                        <div className="skeleton skeleton-border" style={{height:'30px'}}></div> <br />
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                        <div className="skeleton skeleton-border mb-4" style={{height:'10px'}}></div>
                    </div>
                </div>
            </div>
            
        </>
            
        
    )
}