import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '../hooks/use-toast';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

// Schema for email validation
const subscribeSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email is too short')
    .max(255, 'Email is too long')
});

type SubscribeFormType = z.infer<typeof subscribeSchema>;

const SubscribeSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<SubscribeFormType>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: SubscribeFormType) => {
    // Just validate the form data and let Netlify handle the actual submission and redirect
    setIsSubmitting(true);
    
    // No need to do anything else as form will naturally submit to Netlify
    // with the action="/thank-you.html" handling the redirect
    
    // We're just using react-hook-form for validation before the form submits
    console.log('Subscription data validated:', data);
  };

  return (
    <section className="py-20 bg-tan-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cursive text-3xl md:text-4xl text-charcoal mb-4">
            Be the First to Know
          </h2>
          
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-2xl mx-auto mb-10">
            Step into a deeper journey of faith and purpose. Subscribe to receive exclusive updates, 
            empowering teachings, and first access to all things Priestly Daughters.
          </p>
          
          <div className="max-w-md mx-auto">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-4"
                name="subscribe-secondary" 
                method="POST" 
                action="/thank-you.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden input for Netlify form handling */}
                <input type="hidden" name="form-name" value="subscribe-secondary" />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Your email address"
                            className="h-12 rounded-full px-5 border-tan-dark/30 focus-visible:ring-tan-dark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left text-sm mt-1" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="h-12 bg-tan-dark hover:bg-tan-dark/90 text-white rounded-full px-8"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
              </form>
            </Form>
            
            <p className="text-xs text-charcoal/60 mt-4">
              By subscribing, you agree to our privacy policy. We respect your inbox and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;