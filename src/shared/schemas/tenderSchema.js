import * as yup from 'yup';

const tenderSchema = yup.object().shape({
  label: yup
    .string()
    .required('Label is required')
    .max(50, 'Label must be at most 50 characters'),
    
  title: yup
    .string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be at most 100 characters'),
    
  bid_deadline: yup
    .date()
    .required('Bid deadline is required')
    .min(new Date(), 'Bid deadline must be in the future')
    .typeError('Please enter a valid date'),
    
  industry_ids: yup
    .object()
    .test(
      'at-least-one-industry',
      'At least one industry must be selected',
      (value) => Object.keys(value).length > 0
    ),
    
  tender_budget_amount: yup
    .number()
    .typeError('Budget amount must be a valid number')
    .required('Budget amount is required')
    .positive('Budget amount must be greater than 0')
    .test(
      'not-negative',
      'Budget amount cannot be negative',
      (value) => value >= 0
    )
    .max(100000000, 'Budget amount cannot exceed 100,000,000'),
    
  quantity: yup
    .number()
    .typeError('Quantity must be a number')
    .required('Quantity is required')
    .integer('Quantity must be a whole number')
    .min(1, 'Quantity must be at least 1'),

});

export default tenderSchema;