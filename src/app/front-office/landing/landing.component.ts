import { Component } from '@angular/core';
import { NftSectionComponent } from "./nft-section/nft-section.component";
import { WhyChooseComponent } from "./why-choose/why-choose.component";
import { WeHelpComponent } from "./we-help/we-help.component";
import { TestimonialSectionComponent } from "./testimonial-section/testimonial-section.component";
import { BlogSectionComponent } from "./blog-section/blog-section.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    imports: [NftSectionComponent, WhyChooseComponent, WeHelpComponent, TestimonialSectionComponent, BlogSectionComponent]
})
export class LandingComponent {

}
