function Card(props){
  return  <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
            <h6 class="card-price text-center">{props.price}<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li class={props.feature[0].class}><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature[0].list}</li>
              <li class={props.feature[1].class}><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature[1].list}</li>
              <li class={props.feature[2].class}><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature[2].list}</li>
              <li class={props.feature[3].class}><span class="fa-li"><i class="fas fa-check"></i></span>{props.feature[3].list}</li>
              <li class={props.feature[4].class}><span class="fa-li"><i class="fas fa-times"></i></span>{props.feature[4].list}</li>
              <li class={props.feature[5].class}><span class="fa-li"><i class="fas fa-times"></i></span>{props.feature[5].list}</li>
              <li class={props.feature[6].class}><span class="fa-li"><i class="fas fa-times"></i></span>{props.feature[6].list}
              </li>
              <li class={props.feature[7].class}><span class="fa-li"><i class="fas fa-times"></i></span>{props.feature[7].list}</li>
            </ul>
            <div class="d-grid">
              <a href="/" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
}

export default Card;