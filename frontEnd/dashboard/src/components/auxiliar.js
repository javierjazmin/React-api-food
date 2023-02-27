export function diets(d) {
    if (typeof d === "string"){
        return d
    }else{
        return d.name
    }
  }

export function disht(d) {
    if (typeof d === "string"){
        return true
    }else{
        return false
    }
  }

export function diets_detail(d) {
    if (d.name){
        return d.name
    }else{
        return d
    }
  }
